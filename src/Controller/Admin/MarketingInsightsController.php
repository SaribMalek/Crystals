<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use App\Repository\OrderItemRepository;
use App\Repository\ProductRepository;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminRoute;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class MarketingInsightsController extends AbstractController
{
    #[AdminRoute(path: '/marketing/featured-products', name: 'marketing_featured_products', options: ['methods' => ['GET']])]
    public function featuredProducts(ProductRepository $productRepository): Response
    {
        $products = $productRepository->findBy(['is_featured' => true], ['id' => 'DESC']);

        return $this->render('admin/marketing_featured_products.html.twig', [
            'products' => $products,
        ]);
    }

    #[AdminRoute(path: '/marketing/best-sellers', name: 'marketing_best_sellers', options: ['methods' => ['GET']])]
    public function bestSellers(OrderItemRepository $orderItemRepository): Response
    {
        $bestSellers = $orderItemRepository->createQueryBuilder('oi')
            ->select('p.id AS product_id', 'p.name AS product_name', 'SUM(oi.quantity) AS units_sold', 'SUM(oi.quantity * oi.price) AS gross_amount')
            ->innerJoin('oi.product', 'p')
            ->innerJoin('oi.order_ref', 'o')
            ->where('LOWER(o.status) IN (:paidStatuses)')
            ->setParameter('paidStatuses', [Order::STATUS_PAID, 'completed', Order::STATUS_DELIVERED])
            ->groupBy('p.id, p.name')
            ->orderBy('units_sold', 'DESC')
            ->addOrderBy('gross_amount', 'DESC')
            ->setMaxResults(50)
            ->getQuery()
            ->getArrayResult();

        return $this->render('admin/marketing_best_sellers.html.twig', [
            'best_sellers' => $bestSellers,
        ]);
    }
}
