<?php

namespace App\Controller\Admin;

use App\Entity\Customer;
use App\Entity\Order;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CustomerToolsController extends AbstractController
{
    #[Route('/admin/customers/{id}/orders', name: 'admin_customer_orders', methods: ['GET'])]
    public function orders(Customer $customer, OrderRepository $orderRepository): Response
    {
        $orders = $orderRepository->findBy(
            ['customer_email' => strtolower((string) $customer->getEmail())],
            ['created_at' => 'DESC']
        );

        return $this->render('admin/customer_orders.html.twig', [
            'customer' => $customer,
            'orders' => $orders,
        ]);
    }

    #[Route('/admin/customers/{id}/password-reset', name: 'admin_customer_password_reset', methods: ['GET'])]
    public function manualPasswordReset(Customer $customer, EntityManagerInterface $entityManager): Response
    {
        $tempPassword = $this->generateTempPassword();
        $hash = password_hash($tempPassword, PASSWORD_BCRYPT);
        $customer->setPasswordHash($hash !== false ? $hash : null);
        $entityManager->flush();

        $this->addFlash('success', sprintf('Temporary password for %s: %s', $customer->getEmail(), $tempPassword));

        return $this->redirectToRoute('admin', [
            'crudControllerFqcn' => CustomerCrudController::class,
            'action' => 'detail',
            'entityId' => $customer->getId(),
        ]);
    }

    #[Route('/admin/customers/{id}/gdpr-export', name: 'admin_customer_export', methods: ['GET'])]
    public function export(Customer $customer, OrderRepository $orderRepository): Response
    {
        $orders = $orderRepository->findBy(
            ['customer_email' => strtolower((string) $customer->getEmail())],
            ['created_at' => 'DESC']
        );

        $payload = [
            'customer' => [
                'id' => $customer->getId(),
                'email' => $customer->getEmail(),
                'full_name' => $customer->getFullName(),
                'phone' => $customer->getPhone(),
                'account_status' => $customer->getAccountStatus(),
                'customer_group' => $customer->getCustomerGroup(),
                'billing_address' => $customer->getBillingAddress(),
                'shipping_address' => $customer->getShippingAddress(),
                'created_at' => $customer->getCreatedAt()?->format(DATE_ATOM),
                'updated_at' => $customer->getUpdatedAt()?->format(DATE_ATOM),
            ],
            'orders' => array_map(static function (Order $order): array {
                return [
                    'id' => $order->getId(),
                    'status' => $order->getStatus(),
                    'total_amount' => $order->getTotalAmount(),
                    'payment_method' => $order->getPaymentMethod(),
                    'shipping_address' => $order->getShippingAddress(),
                    'created_at' => $order->getCreatedAt()?->format(DATE_ATOM),
                ];
            }, $orders),
        ];

        $json = json_encode($payload, JSON_PRETTY_PRINT);

        return new Response($json ?: '{}', 200, [
            'Content-Type' => 'application/json',
            'Content-Disposition' => sprintf('attachment; filename="customer-%d-gdpr-export.json"', $customer->getId()),
        ]);
    }

    #[Route('/admin/customers/{id}/gdpr-delete', name: 'admin_customer_gdpr_delete', methods: ['GET'])]
    public function gdprDelete(Customer $customer, OrderRepository $orderRepository, EntityManagerInterface $entityManager): Response
    {
        $orders = $orderRepository->findBy(['customer_email' => strtolower((string) $customer->getEmail())]);
        $replacementEmail = sprintf('deleted-customer-%d@privacy.local', $customer->getId());

        foreach ($orders as $order) {
            $order->setCustomerEmail($replacementEmail);
            $order->setShippingAddress(null);
            $existingNote = (string) ($order->getInternalNote() ?? '');
            $order->setInternalNote(trim($existingNote.' GDPR data erased'));
        }

        $entityManager->remove($customer);
        $entityManager->flush();

        $this->addFlash('success', 'Customer data deleted and order personal data anonymized.');

        return $this->redirectToRoute('admin', [
            'crudControllerFqcn' => CustomerCrudController::class,
            'action' => 'index',
        ]);
    }

    private function generateTempPassword(): string
    {
        $alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789@#';
        $max = strlen($alphabet) - 1;
        $password = '';
        for ($i = 0; $i < 12; $i++) {
            $password .= $alphabet[random_int(0, $max)];
        }

        return $password;
    }
}
