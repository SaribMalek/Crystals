<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use App\Repository\CustomerRepository;
use App\Repository\OrderItemRepository;
use App\Repository\OrderRepository;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminRoute;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class ReportsAnalyticsController extends AbstractController
{
    #[AdminRoute(path: '/reports-analytics', name: 'reports_analytics', options: ['methods' => ['GET']])]
    #[IsGranted('ROLE_MANAGER')]
    public function index(
        OrderRepository $orderRepository,
        OrderItemRepository $orderItemRepository,
        CustomerRepository $customerRepository
    ): Response {
        $analytics = $this->buildAnalyticsData($orderRepository, $orderItemRepository, $customerRepository);

        return $this->render('admin/reports_analytics.html.twig', [
            'analytics' => $analytics,
        ]);
    }

    #[AdminRoute(path: '/reports-analytics/export/{format}', name: 'reports_analytics_export', options: ['requirements' => ['format' => 'csv|excel'], 'methods' => ['GET']])]
    #[IsGranted('ROLE_MANAGER')]
    public function export(
        string $format,
        OrderRepository $orderRepository,
        OrderItemRepository $orderItemRepository,
        CustomerRepository $customerRepository
    ): Response {
        $analytics = $this->buildAnalyticsData($orderRepository, $orderItemRepository, $customerRepository);
        $rows = $this->buildExportRows($analytics);
        $timestamp = (new \DateTimeImmutable())->format('Ymd_His');

        if ($format === 'csv') {
            $handle = fopen('php://temp', 'w+');
            if ($handle === false) {
                throw new \RuntimeException('Could not initialize CSV export.');
            }

            fputcsv($handle, ['Section', 'Metric', 'Value']);
            foreach ($rows as $row) {
                fputcsv($handle, [$row['section'], $row['metric'], $row['value']]);
            }

            rewind($handle);
            $content = stream_get_contents($handle);
            fclose($handle);

            return new Response((string) $content, Response::HTTP_OK, [
                'Content-Type' => 'text/csv; charset=UTF-8',
                'Content-Disposition' => sprintf('attachment; filename="reports_analytics_%s.csv"', $timestamp),
            ]);
        }

        $htmlRows = '';
        foreach ($rows as $row) {
            $htmlRows .= sprintf(
                '<tr><td>%s</td><td>%s</td><td>%s</td></tr>',
                htmlspecialchars((string) $row['section'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'),
                htmlspecialchars((string) $row['metric'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'),
                htmlspecialchars((string) $row['value'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')
            );
        }

        $excelHtml = sprintf(
            '<table border="1"><thead><tr><th>Section</th><th>Metric</th><th>Value</th></tr></thead><tbody>%s</tbody></table>',
            $htmlRows
        );

        return new Response($excelHtml, Response::HTTP_OK, [
            'Content-Type' => 'application/vnd.ms-excel; charset=UTF-8',
            'Content-Disposition' => sprintf('attachment; filename="reports_analytics_%s.xls"', $timestamp),
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    private function buildAnalyticsData(
        OrderRepository $orderRepository,
        OrderItemRepository $orderItemRepository,
        CustomerRepository $customerRepository
    ): array {
        $orders = $orderRepository->findBy([], ['created_at' => 'ASC']);
        $customers = $customerRepository->findBy([], ['created_at' => 'ASC']);
        $monthStart = (new \DateTimeImmutable('first day of this month'))->setTime(0, 0);
        $completedStatuses = [Order::STATUS_PAID, 'completed', Order::STATUS_DELIVERED];

        $totalOrders = count($orders);
        $completedOrders = 0;
        $totalRevenue = 0.0;
        $monthRevenue = 0.0;
        $ordersThisMonth = 0;
        $completedOrdersThisMonth = 0;
        $refundOrders = 0;
        $refundTotal = 0.0;
        $taxTotal = 0.0;
        $taxableOrders = 0;

        foreach ($orders as $order) {
            $status = strtolower(trim((string) $order->getStatus()));
            $amount = (float) ($order->getTotalAmount() ?? 0);
            $taxAmount = (float) ($order->getTaxAmount() ?? 0);
            $refundedAmount = (float) ($order->getRefundedAmount() ?? 0);
            $createdAt = $order->getCreatedAt();

            if ($createdAt !== null && $createdAt >= $monthStart) {
                $ordersThisMonth++;
            }

            if (in_array($status, $completedStatuses, true)) {
                $completedOrders++;
                $totalRevenue += $amount;

                if ($createdAt !== null && $createdAt >= $monthStart) {
                    $completedOrdersThisMonth++;
                    $monthRevenue += $amount;
                }
            }

            if ($taxAmount > 0) {
                $taxableOrders++;
            }
            $taxTotal += $taxAmount;

            if ($refundedAmount > 0 || $status === Order::STATUS_REFUNDED) {
                $refundOrders++;
                $refundTotal += $refundedAmount;
            }
        }

        $conversionRate = $totalOrders > 0 ? ($completedOrders / $totalOrders) * 100 : 0.0;
        $conversionRateMonth = $ordersThisMonth > 0 ? ($completedOrdersThisMonth / $ordersThisMonth) * 100 : 0.0;

        $topProducts = $orderItemRepository->createQueryBuilder('oi')
            ->select('p.name AS product_name', 'SUM(oi.quantity) AS units_sold', 'SUM(oi.quantity * oi.price) AS gross_amount')
            ->innerJoin('oi.product', 'p')
            ->innerJoin('oi.order_ref', 'o')
            ->where('LOWER(o.status) IN (:completedStatuses)')
            ->setParameter('completedStatuses', array_map('strtolower', $completedStatuses))
            ->groupBy('p.id, p.name')
            ->orderBy('units_sold', 'DESC')
            ->addOrderBy('gross_amount', 'DESC')
            ->setMaxResults(10)
            ->getQuery()
            ->getArrayResult();

        $months = [];
        $monthlyGrowth = [];
        $thisMonth = new \DateTimeImmutable('first day of this month');
        for ($i = 5; $i >= 0; $i--) {
            $monthDate = $thisMonth->modify(sprintf('-%d months', $i));
            $key = $monthDate->format('Y-m');
            $months[$key] = $monthDate->format('M Y');
            $monthlyGrowth[$key] = 0;
        }

        $newCustomersThisMonth = 0;
        foreach ($customers as $customer) {
            $createdAt = $customer->getCreatedAt();
            if ($createdAt === null) {
                continue;
            }

            if ($createdAt >= $monthStart) {
                $newCustomersThisMonth++;
            }

            $monthKey = $createdAt->format('Y-m');
            if (array_key_exists($monthKey, $monthlyGrowth)) {
                $monthlyGrowth[$monthKey]++;
            }
        }

        return [
            'sales' => [
                'total_orders' => $totalOrders,
                'completed_orders' => $completedOrders,
                'total_revenue' => round($totalRevenue, 2),
                'month_revenue' => round($monthRevenue, 2),
            ],
            'product_performance' => array_map(static fn (array $row): array => [
                'product_name' => (string) ($row['product_name'] ?? ''),
                'units_sold' => (int) ($row['units_sold'] ?? 0),
                'gross_amount' => round((float) ($row['gross_amount'] ?? 0), 2),
            ], $topProducts),
            'customer_growth' => [
                'total_customers' => count($customers),
                'new_this_month' => $newCustomersThisMonth,
                'monthly' => array_map(static fn (string $label, int $count): array => [
                    'month' => $label,
                    'new_customers' => $count,
                ], array_values($months), array_values($monthlyGrowth)),
            ],
            'conversion_rate' => [
                'overall' => round($conversionRate, 2),
                'this_month' => round($conversionRateMonth, 2),
                'definition' => 'Completed orders / total orders',
            ],
            'refunds' => [
                'refund_orders' => $refundOrders,
                'refund_total' => round($refundTotal, 2),
            ],
            'tax' => [
                'taxable_orders' => $taxableOrders,
                'total_tax' => round($taxTotal, 2),
            ],
        ];
    }

    /**
     * @param array<string, mixed> $analytics
     * @return array<int, array{section: string, metric: string, value: string}>
     */
    private function buildExportRows(array $analytics): array
    {
        $rows = [
            ['section' => 'Sales report', 'metric' => 'Total orders', 'value' => (string) ($analytics['sales']['total_orders'] ?? 0)],
            ['section' => 'Sales report', 'metric' => 'Completed orders', 'value' => (string) ($analytics['sales']['completed_orders'] ?? 0)],
            ['section' => 'Sales report', 'metric' => 'Total revenue', 'value' => '$'.number_format((float) ($analytics['sales']['total_revenue'] ?? 0), 2, '.', ',')],
            ['section' => 'Sales report', 'metric' => 'Revenue this month', 'value' => '$'.number_format((float) ($analytics['sales']['month_revenue'] ?? 0), 2, '.', ',')],
            ['section' => 'Customer growth', 'metric' => 'Total customers', 'value' => (string) ($analytics['customer_growth']['total_customers'] ?? 0)],
            ['section' => 'Customer growth', 'metric' => 'New this month', 'value' => (string) ($analytics['customer_growth']['new_this_month'] ?? 0)],
            ['section' => 'Conversion rate', 'metric' => 'Overall conversion', 'value' => number_format((float) ($analytics['conversion_rate']['overall'] ?? 0), 2, '.', ',').'%'],
            ['section' => 'Conversion rate', 'metric' => 'This month conversion', 'value' => number_format((float) ($analytics['conversion_rate']['this_month'] ?? 0), 2, '.', ',').'%'],
            ['section' => 'Refund report', 'metric' => 'Refunded orders', 'value' => (string) ($analytics['refunds']['refund_orders'] ?? 0)],
            ['section' => 'Refund report', 'metric' => 'Refund total', 'value' => '$'.number_format((float) ($analytics['refunds']['refund_total'] ?? 0), 2, '.', ',')],
            ['section' => 'Tax report', 'metric' => 'Taxable orders', 'value' => (string) ($analytics['tax']['taxable_orders'] ?? 0)],
            ['section' => 'Tax report', 'metric' => 'Total tax', 'value' => '$'.number_format((float) ($analytics['tax']['total_tax'] ?? 0), 2, '.', ',')],
        ];

        foreach (($analytics['customer_growth']['monthly'] ?? []) as $row) {
            $rows[] = [
                'section' => 'Customer growth',
                'metric' => (string) (($row['month'] ?? '').' new customers'),
                'value' => (string) ($row['new_customers'] ?? 0),
            ];
        }

        foreach (($analytics['product_performance'] ?? []) as $index => $row) {
            $rank = $index + 1;
            $rows[] = [
                'section' => 'Product performance',
                'metric' => sprintf(
                    'Top %d: %s (units / gross)',
                    $rank,
                    (string) ($row['product_name'] ?? 'Unknown')
                ),
                'value' => sprintf(
                    '%d / $%s',
                    (int) ($row['units_sold'] ?? 0),
                    number_format((float) ($row['gross_amount'] ?? 0), 2, '.', ',')
                ),
            ];
        }

        return $rows;
    }
}
