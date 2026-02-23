<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\AbandonedCart;
use App\Entity\Banner;
use App\Entity\BlogPost;
use App\Entity\Coupon;
use App\Entity\Customer;
use App\Entity\DeliveryPartner;
use App\Entity\EmailCampaign;
use App\Entity\FaqItem;
use App\Entity\FooterLink;
use App\Entity\HeaderMenu;
use App\Entity\InventorySettings;
use App\Entity\NewsletterSubscriber;
use App\Entity\Order;
use App\Entity\OrderItem;
use App\Entity\PaymentFailureLog;
use App\Entity\PaymentSettings;
use App\Entity\PaymentTransaction;
use App\Entity\Product;
use App\Entity\ProductReview;
use App\Entity\PushNotification;
use App\Entity\ReferralProgram;
use App\Entity\ShipmentTracking;
use App\Entity\ShippingMethod;
use App\Entity\ShippingZone;
use App\Entity\StockHistory;
use App\Entity\StaticPage;
use App\Entity\TaxRule;
use App\Entity\User;
use App\Repository\CategoryRepository;
use App\Repository\InventorySettingsRepository;
use App\Repository\OrderItemRepository;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\StaticPageRepository;
use App\Repository\StockHistoryRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\UserMenu;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\User\UserInterface;

#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    private const CMS_PAGE_META = [
        'about' => ['title' => 'About Us', 'slug' => 'about', 'type' => 'about'],
        'contact' => ['title' => 'Contact Us', 'slug' => 'contact', 'type' => 'contact'],
        'policy' => ['title' => 'Policy', 'slug' => 'policy', 'type' => 'policy'],
        'terms' => ['title' => 'Terms & Conditions', 'slug' => 'terms', 'type' => 'terms'],
        'privacy' => ['title' => 'Privacy Policy', 'slug' => 'privacy', 'type' => 'privacy'],
    ];

    public function __construct(
        private readonly ProductRepository $productRepository,
        private readonly CategoryRepository $categoryRepository,
        private readonly OrderRepository $orderRepository,
        private readonly OrderItemRepository $orderItemRepository,
        private readonly InventorySettingsRepository $inventorySettingsRepository,
        private readonly StockHistoryRepository $stockHistoryRepository,
        private readonly UserRepository $userRepository,
        private readonly AdminUrlGenerator $adminUrlGenerator
    ) {
    }

    public function index(): Response
    {
        $products = $this->productRepository->findAll();
        $orders = $this->orderRepository->findBy([], ['created_at' => 'DESC'], 5);
        $allOrders = $this->orderRepository->findBy([], ['created_at' => 'ASC']);
        $adminUsers = $this->userRepository->findBy([], ['created_at' => 'DESC'], 8);
        $recentStockLogs = $this->stockHistoryRepository->findBy([], ['changed_at' => 'DESC'], 8);
        $inventorySettings = $this->inventorySettingsRepository->findOneBy([]) ?? (new InventorySettings());

        $totalRevenue = 0.0;
        foreach ($allOrders as $order) {
            $totalRevenue += (float) $order->getTotalAmount();
        }

        $todayStart = new \DateTimeImmutable('today');
        $weekStart = (new \DateTimeImmutable('today'))->modify('monday this week');
        $monthStart = (new \DateTimeImmutable('first day of this month'))->setTime(0, 0);

        $salesToday = 0.0;
        $salesWeek = 0.0;
        $salesMonth = 0.0;
        $pendingCount = 0;
        $completedCount = 0;
        $cancelledCount = 0;
        $statusFlowCounts = [
            Order::STATUS_PENDING => 0,
            Order::STATUS_PAID => 0,
            Order::STATUS_PROCESSING => 0,
            Order::STATUS_SHIPPED => 0,
            Order::STATUS_DELIVERED => 0,
            Order::STATUS_CANCELLED => 0,
            Order::STATUS_REFUNDED => 0,
        ];
        $customerEmails = [];

        foreach ($allOrders as $order) {
            $createdAt = $order->getCreatedAt();
            $status = strtolower(trim((string) $order->getStatus()));
            $amount = (float) $order->getTotalAmount();
            $email = strtolower(trim((string) $order->getCustomerEmail()));

            if ($email !== '') {
                $customerEmails[$email] = true;
            }

            if (array_key_exists($status, $statusFlowCounts)) {
                $statusFlowCounts[$status]++;
            }

            if ($status === 'pending') {
                $pendingCount++;
            } elseif (in_array($status, [Order::STATUS_PAID, 'completed', Order::STATUS_DELIVERED], true)) {
                $completedCount++;

                if ($createdAt !== null && $createdAt >= $todayStart) {
                    $salesToday += $amount;
                }
                if ($createdAt !== null && $createdAt >= $weekStart) {
                    $salesWeek += $amount;
                }
                if ($createdAt !== null && $createdAt >= $monthStart) {
                    $salesMonth += $amount;
                }
            } elseif (in_array($status, [Order::STATUS_CANCELLED, 'canceled', 'failed'], true)) {
                $cancelledCount++;
            }
        }

        $topSellingProducts = $this->orderItemRepository->createQueryBuilder('oi')
            ->select('p.id AS product_id', 'p.name AS product_name', 'SUM(oi.quantity) AS units_sold', 'SUM(oi.quantity * oi.price) AS gross_amount')
            ->innerJoin('oi.product', 'p')
            ->innerJoin('oi.order_ref', 'o')
            ->where('LOWER(o.status) IN (:completedStatuses)')
            ->setParameter('completedStatuses', ['paid', 'completed'])
            ->groupBy('p.id, p.name')
            ->orderBy('units_sold', 'DESC')
            ->addOrderBy('gross_amount', 'DESC')
            ->setMaxResults(5)
            ->getQuery()
            ->getArrayResult();

        $months = [];
        $monthlyOrderCounts = [];
        $monthlyRevenue = [];
        $now = new \DateTimeImmutable('first day of this month');
        for ($i = 5; $i >= 0; $i--) {
            $monthDate = $now->modify(sprintf('-%d months', $i));
            $key = $monthDate->format('Y-m');
            $months[$key] = $monthDate->format('M Y');
            $monthlyOrderCounts[$key] = 0;
            $monthlyRevenue[$key] = 0.0;
        }

        foreach ($allOrders as $order) {
            $createdAt = $order->getCreatedAt();
            if ($createdAt === null) {
                continue;
            }
            $monthKey = $createdAt->format('Y-m');
            if (!array_key_exists($monthKey, $months)) {
                continue;
            }
            $monthlyOrderCounts[$monthKey]++;
            $monthlyRevenue[$monthKey] += (float) $order->getTotalAmount();
        }

        $categoryLabels = [];
        $categoryProductCounts = [];
        foreach ($this->categoryRepository->findAll() as $category) {
            $categoryLabels[] = $category->getName();
            $categoryProductCounts[] = count($category->getProducts());
        }

        $threshold = max(0, $inventorySettings->getLowStockThreshold());
        $isTrackingEnabled = $inventorySettings->isStockTrackingEnabled();
        $isOutOfStockNotifyEnabled = $inventorySettings->isOutOfStockNotificationsEnabled();

        $lowStockCount = 0;
        $outOfStockCount = 0;
        $outOfStockProducts = [];

        if ($isTrackingEnabled) {
            $lowStockCount = (int) $this->productRepository->createQueryBuilder('p')
                ->select('COUNT(p.id)')
                ->where('p.stock <= :stockLimit')
                ->setParameter('stockLimit', $threshold)
                ->getQuery()
                ->getSingleScalarResult();

            $outOfStockCount = (int) $this->productRepository->createQueryBuilder('p')
                ->select('COUNT(p.id)')
                ->where('p.stock <= 0')
                ->getQuery()
                ->getSingleScalarResult();

            if ($isOutOfStockNotifyEnabled && $outOfStockCount > 0) {
                $outOfStockProducts = $this->productRepository->createQueryBuilder('p')
                    ->select('p.id AS id', 'p.name AS name', 'p.stock AS stock')
                    ->where('p.stock <= 0')
                    ->orderBy('p.name', 'ASC')
                    ->setMaxResults(10)
                    ->getQuery()
                    ->getArrayResult();
            }
        }

        return $this->render('admin/dashboard.html.twig', [
            'stats' => [
                'product_count' => $this->productRepository->count([]),
                'category_count' => $this->categoryRepository->count([]),
                'order_count' => $this->orderRepository->count([]),
                'pending_order_count' => $pendingCount,
                'completed_order_count' => $completedCount,
                'cancelled_order_count' => $cancelledCount,
                'customer_count' => count($customerEmails),
                'low_stock_count' => $lowStockCount,
                'out_of_stock_count' => $outOfStockCount,
                'featured_count' => count(array_filter($products, static fn (Product $product): bool => $product->isIsFeatured())),
                'sale_count' => count(array_filter($products, static fn (Product $product): bool => $product->isIsSale())),
                'total_revenue' => $totalRevenue,
                'sales_today' => round($salesToday, 2),
                'sales_week' => round($salesWeek, 2),
                'sales_month' => round($salesMonth, 2),
            ],
            'quick_links' => [
                'products' => (clone $this->adminUrlGenerator)->setController(ProductCrudController::class)->generateUrl(),
                'new_product' => (clone $this->adminUrlGenerator)->setController(ProductCrudController::class)->setAction(Crud::PAGE_NEW)->generateUrl(),
                'categories' => (clone $this->adminUrlGenerator)->setController(CategoryCrudController::class)->generateUrl(),
                'new_category' => (clone $this->adminUrlGenerator)->setController(CategoryCrudController::class)->setAction(Crud::PAGE_NEW)->generateUrl(),
                'orders' => (clone $this->adminUrlGenerator)->setController(OrderCrudController::class)->generateUrl(),
                'new_order' => (clone $this->adminUrlGenerator)->setController(OrderCrudController::class)->setAction(Crud::PAGE_NEW)->generateUrl(),
                'order_items' => (clone $this->adminUrlGenerator)->setController(OrderItemCrudController::class)->generateUrl(),
                'new_order_item' => (clone $this->adminUrlGenerator)->setController(OrderItemCrudController::class)->setAction(Crud::PAGE_NEW)->generateUrl(),
                'users' => (clone $this->adminUrlGenerator)->setController(UserCrudController::class)->generateUrl(),
                'new_user' => (clone $this->adminUrlGenerator)->setController(UserCrudController::class)->setAction(Crud::PAGE_NEW)->generateUrl(),
                'customers' => (clone $this->adminUrlGenerator)->setController(CustomerCrudController::class)->generateUrl(),
                'new_customer' => (clone $this->adminUrlGenerator)->setController(CustomerCrudController::class)->setAction(Crud::PAGE_NEW)->generateUrl(),
                'inventory_settings' => (clone $this->adminUrlGenerator)->setController(InventorySettingsCrudController::class)->generateUrl(),
                'payment_settings' => (clone $this->adminUrlGenerator)->setController(PaymentSettingsCrudController::class)->generateUrl(),
                'payment_transactions' => (clone $this->adminUrlGenerator)->setController(PaymentTransactionCrudController::class)->generateUrl(),
                'payment_failures' => (clone $this->adminUrlGenerator)->setController(PaymentFailureLogCrudController::class)->generateUrl(),
                'shipping_zones' => (clone $this->adminUrlGenerator)->setController(ShippingZoneCrudController::class)->generateUrl(),
                'shipping_methods' => (clone $this->adminUrlGenerator)->setController(ShippingMethodCrudController::class)->generateUrl(),
                'delivery_partners' => (clone $this->adminUrlGenerator)->setController(DeliveryPartnerCrudController::class)->generateUrl(),
                'tracking' => (clone $this->adminUrlGenerator)->setController(ShipmentTrackingCrudController::class)->generateUrl(),
                'coupons' => (clone $this->adminUrlGenerator)->setController(CouponCrudController::class)->generateUrl(),
                'tax_rules' => (clone $this->adminUrlGenerator)->setController(TaxRuleCrudController::class)->generateUrl(),
                'tax_reports' => $this->generateUrl('admin_tax_reports'),
                'banners' => (clone $this->adminUrlGenerator)->setController(BannerCrudController::class)->generateUrl(),
                'featured_products' => $this->generateUrl('admin_marketing_featured_products'),
                'best_sellers' => $this->generateUrl('admin_marketing_best_sellers'),
                'email_campaigns' => (clone $this->adminUrlGenerator)->setController(EmailCampaignCrudController::class)->generateUrl(),
                'push_notifications' => (clone $this->adminUrlGenerator)->setController(PushNotificationCrudController::class)->generateUrl(),
                'abandoned_carts' => (clone $this->adminUrlGenerator)->setController(AbandonedCartCrudController::class)->generateUrl(),
                'newsletter_subscribers' => (clone $this->adminUrlGenerator)->setController(NewsletterSubscriberCrudController::class)->generateUrl(),
                'referral_program' => (clone $this->adminUrlGenerator)->setController(ReferralProgramCrudController::class)->generateUrl(),
                'reviews' => (clone $this->adminUrlGenerator)->setController(ProductReviewCrudController::class)->generateUrl(),
                'review_analytics' => $this->generateUrl('admin_review_analytics'),
                'static_pages' => (clone $this->adminUrlGenerator)->setController(StaticPageCrudController::class)->generateUrl(),
                'cms_about' => $this->generateUrl('admin_cms_static_page_edit', ['type' => 'about']),
                'cms_contact' => $this->generateUrl('admin_cms_static_page_edit', ['type' => 'contact']),
                'cms_policy' => $this->generateUrl('admin_cms_static_page_edit', ['type' => 'policy']),
                'cms_terms' => $this->generateUrl('admin_cms_static_page_edit', ['type' => 'terms']),
                'cms_privacy' => $this->generateUrl('admin_cms_static_page_edit', ['type' => 'privacy']),
                'faq_items' => (clone $this->adminUrlGenerator)->setController(FaqItemCrudController::class)->generateUrl(),
                'blog_posts' => (clone $this->adminUrlGenerator)->setController(BlogPostCrudController::class)->generateUrl(),
                'footer_links' => (clone $this->adminUrlGenerator)->setController(FooterLinkCrudController::class)->generateUrl(),
                'stock_history' => (clone $this->adminUrlGenerator)->setController(StockHistoryCrudController::class)->generateUrl(),
                'bulk_stock_update' => $this->generateUrl('admin_bulk_stock_update'),
            ],
            'recent_orders' => $orders,
            'order_status_flow_counts' => $statusFlowCounts,
            'admin_users' => $adminUsers,
            'recent_stock_logs' => $recentStockLogs,
            'out_of_stock_products' => $outOfStockProducts,
            'inventory_settings' => [
                'stock_tracking_enabled' => $isTrackingEnabled,
                'low_stock_threshold' => $threshold,
                'out_of_stock_notifications_enabled' => $isOutOfStockNotifyEnabled,
            ],
            'top_selling_products' => array_map(static fn (array $item): array => [
                'product_id' => (int) ($item['product_id'] ?? 0),
                'product_name' => (string) ($item['product_name'] ?? ''),
                'units_sold' => (int) ($item['units_sold'] ?? 0),
                'gross_amount' => round((float) ($item['gross_amount'] ?? 0), 2),
            ], $topSellingProducts),
            'admin_user_links' => array_reduce($adminUsers, function (array $links, User $user): array {
                $id = $user->getId();
                if ($id === null) {
                    return $links;
                }

                $links[$id] = [
                    'edit' => (clone $this->adminUrlGenerator)
                        ->setController(UserCrudController::class)
                        ->setAction(Action::EDIT)
                        ->setEntityId($id)
                        ->generateUrl(),
                ];

                return $links;
            }, []),
            'charts' => [
                'months' => array_values($months),
                'monthly_order_counts' => array_values($monthlyOrderCounts),
                'monthly_revenue' => array_map(static fn (float $value): float => round($value, 2), array_values($monthlyRevenue)),
                'category_labels' => $categoryLabels,
                'category_product_counts' => $categoryProductCounts,
            ],
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('<span class="ea-brand ea-brand-inline"><img src="/images/AS_Crystal_logo.png" alt="AS Crystal" class="ea-brand-full-logo"></span>')
            ->setFaviconPath('images/AS_Crystal_logo.png');
    }

    public function configureAssets(): \EasyCorp\Bundle\EasyAdminBundle\Config\Assets
    {
        return parent::configureAssets()
            ->addCssFile('css/admin.css?v=20260220y')
            ->addJsFile('js/admin-force-light.js?v=20260220o');
    }

    public function configureUserMenu(UserInterface $user): UserMenu
    {
        $menu = parent::configureUserMenu($user)
            ->setName(method_exists($user, 'getDisplayName') ? (string) $user->getDisplayName() : $user->getUserIdentifier())
            ->displayUserName(true)
            ->displayUserAvatar(true)
            ->addMenuItems([
                MenuItem::linkToRoute('My Profile', 'fas fa-id-card', 'admin_profile'),
            ]);

        if ($user instanceof User && $user->getProfileImage() !== null) {
            $menu->setAvatarUrl('/'.$user->getProfileImage());
        }

        return $menu;
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Overview', 'fas fa-chart-line');

        yield MenuItem::section('Quick Create');
        yield MenuItem::linkToCrud('Add Product', 'fas fa-plus-circle', Product::class)->setAction(Crud::PAGE_NEW);
        yield MenuItem::linkToCrud('Add Category', 'fas fa-folder-plus', Category::class)->setAction(Crud::PAGE_NEW);
        yield MenuItem::linkToCrud('Add Order', 'fas fa-receipt', Order::class)->setAction(Crud::PAGE_NEW);

        yield MenuItem::section('Catalog');
        yield MenuItem::linkToCrud('Manage Categories', 'fas fa-list', Category::class);
        yield MenuItem::linkToCrud('Manage Products', 'fas fa-gem', Product::class);
        yield MenuItem::linkToCrud('Stock History Log', 'fas fa-clipboard-list', StockHistory::class);
        yield MenuItem::linkToCrud('Inventory Settings', 'fas fa-sliders-h', InventorySettings::class);
        yield MenuItem::linkToRoute('Bulk Stock Update', 'fas fa-layer-group', 'admin_bulk_stock_update');

        yield MenuItem::section('Sales');
        yield MenuItem::linkToCrud('Manage Orders', 'fas fa-shopping-cart', Order::class);
        yield MenuItem::linkToCrud('Order Line Items', 'fas fa-list-ol', OrderItem::class);
        yield MenuItem::linkToCrud('Payment Settings', 'fas fa-credit-card', PaymentSettings::class);
        yield MenuItem::linkToCrud('Transactions', 'fas fa-receipt', PaymentTransaction::class);
        yield MenuItem::linkToCrud('Payment Failure Logs', 'fas fa-exclamation-circle', PaymentFailureLog::class);
        yield MenuItem::linkToCrud('Coupons', 'fas fa-tags', Coupon::class);

        yield MenuItem::section('Marketing');
        yield MenuItem::linkToCrud('Banner Management', 'fas fa-images', Banner::class);
        yield MenuItem::linkToRoute('Featured Products', 'fas fa-star', 'admin_marketing_featured_products');
        yield MenuItem::linkToRoute('Best Sellers', 'fas fa-fire', 'admin_marketing_best_sellers');
        yield MenuItem::linkToCrud('Email Campaigns', 'fas fa-envelope-open-text', EmailCampaign::class);
        yield MenuItem::linkToCrud('Push Notifications', 'fas fa-bell', PushNotification::class);
        yield MenuItem::linkToCrud('Abandoned Carts', 'fas fa-shopping-basket', AbandonedCart::class);
        yield MenuItem::linkToCrud('Newsletter Subscribers', 'fas fa-user-check', NewsletterSubscriber::class);
        yield MenuItem::linkToCrud('Referral Program', 'fas fa-user-friends', ReferralProgram::class);

        yield MenuItem::section('Reviews');
        yield MenuItem::linkToCrud('Reviews & Ratings', 'fas fa-star-half-alt', ProductReview::class);
        yield MenuItem::linkToRoute('Rating Analytics', 'fas fa-chart-bar', 'admin_review_analytics');

        yield MenuItem::section('Shipping');
        yield MenuItem::linkToCrud('Shipping Zones', 'fas fa-map-marked-alt', ShippingZone::class);
        yield MenuItem::linkToCrud('Shipping Methods', 'fas fa-truck', ShippingMethod::class);
        yield MenuItem::linkToCrud('Delivery Partners', 'fas fa-shipping-fast', DeliveryPartner::class);
        yield MenuItem::linkToCrud('Tracking IDs', 'fas fa-route', ShipmentTracking::class);

        yield MenuItem::section('Tax');
        yield MenuItem::linkToCrud('Tax Rules', 'fas fa-percent', TaxRule::class);
        yield MenuItem::linkToRoute('Tax Reports', 'fas fa-file-invoice-dollar', 'admin_tax_reports');

        yield MenuItem::section('CMS / Content Management');
        yield MenuItem::linkToCrud('Header Menu', 'fas fa-bars', HeaderMenu::class);
        yield MenuItem::linkToCrud('Static Pages (About/Contact/Policy)', 'fas fa-file-alt', StaticPage::class);
        yield MenuItem::linkToRoute('Terms & Conditions', 'fas fa-file-contract', 'admin_cms_static_page_edit', ['type' => 'terms']);
        yield MenuItem::linkToRoute('Privacy Policy', 'fas fa-user-shield', 'admin_cms_static_page_edit', ['type' => 'privacy']);
        yield MenuItem::linkToCrud('FAQ Management', 'fas fa-question-circle', FaqItem::class);
        yield MenuItem::linkToCrud('Blog Posts', 'fas fa-blog', BlogPost::class);
        yield MenuItem::linkToCrud('Footer Links', 'fas fa-link', FooterLink::class);
        yield MenuItem::section('Administration');
        yield MenuItem::linkToCrud('Customers', 'fas fa-user-friends', Customer::class);
        yield MenuItem::linkToCrud('Manage Users', 'fas fa-users-cog', User::class);
        yield MenuItem::linkToRoute('Logout', 'fas fa-sign-out-alt', 'app_admin_logout');
        yield MenuItem::linkToRoute('Go to Home Page', 'fas fa-home', 'home');
        yield MenuItem::linkToUrl('Open Shop Catalog', 'fas fa-store', '/shop');
        yield MenuItem::linkToUrl('Open Product API', 'fas fa-code', '/api/products');
        yield MenuItem::linkToRoute('Uploaded Images', 'fas fa-images', 'admin_uploads_products');
    }

    #[Route('/admin/cms/page/{type}', name: 'admin_cms_static_page_edit', requirements: ['type' => 'about|contact|policy|terms|privacy'])]
    public function editCmsStaticPage(
        string $type,
        StaticPageRepository $staticPageRepository,
        EntityManagerInterface $entityManager
    ): RedirectResponse {
        $page = $staticPageRepository->findOneBy(['page_type' => $type]);

        if ($page === null) {
            $meta = self::CMS_PAGE_META[$type] ?? null;
            if ($meta === null) {
                throw $this->createNotFoundException('Invalid CMS page type.');
            }

            $page = (new StaticPage())
                ->setTitle($meta['title'])
                ->setSlug($meta['slug'])
                ->setPageType($meta['type'])
                ->setContent('');

            $entityManager->persist($page);
            $entityManager->flush();
        }

        $id = $page->getId();
        if ($id === null) {
            throw $this->createNotFoundException('CMS page could not be resolved.');
        }

        $url = (clone $this->adminUrlGenerator)
            ->setController(StaticPageCrudController::class)
            ->setAction(Action::EDIT)
            ->setEntityId($id)
            ->generateUrl();

        return $this->redirect($url);
    }
}
