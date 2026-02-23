<?php

namespace App\Controller\Admin;

use App\Repository\OrderRepository;
use App\Repository\TaxRuleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TaxReportController extends AbstractController
{
    #[Route('/admin/tax-reports', name: 'admin_tax_reports', methods: ['GET'])]
    public function index(OrderRepository $orderRepository, TaxRuleRepository $taxRuleRepository): Response
    {
        $orders = $orderRepository->findBy([], ['created_at' => 'DESC']);
        $rules = $taxRuleRepository->findBy(['is_active' => true], ['country' => 'ASC', 'state' => 'ASC']);

        $totalTax = 0.0;
        $taxableOrders = 0;
        $countryStats = [];

        foreach ($orders as $order) {
            $taxAmount = (float) ($order->getTaxAmount() ?? 0);
            if ($taxAmount > 0) {
                $taxableOrders++;
            }
            $totalTax += $taxAmount;

            $address = strtolower((string) ($order->getShippingAddress() ?? ''));
            $bucket = 'Unmapped';
            foreach ($rules as $rule) {
                $country = strtolower($rule->getCountry());
                if ($country !== '' && str_contains($address, $country)) {
                    $bucket = strtoupper($rule->getCountry());
                    break;
                }
            }
            if (!isset($countryStats[$bucket])) {
                $countryStats[$bucket] = ['orders' => 0, 'tax' => 0.0];
            }
            $countryStats[$bucket]['orders']++;
            $countryStats[$bucket]['tax'] += $taxAmount;
        }

        return $this->render('admin/tax_reports.html.twig', [
            'summary' => [
                'orders' => count($orders),
                'taxable_orders' => $taxableOrders,
                'total_tax' => round($totalTax, 2),
            ],
            'country_stats' => $countryStats,
            'rules' => $rules,
        ]);
    }
}
