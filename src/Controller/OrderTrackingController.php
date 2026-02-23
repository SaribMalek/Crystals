<?php

namespace App\Controller;

use App\Entity\Order;
use App\Repository\OrderRepository;
use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderTrackingController extends AbstractController
{
    #[Route('/api/orders', name: 'api_customer_orders', methods: ['GET'])]
    public function list(Request $request, OrderRepository $orderRepository): JsonResponse
    {
        $email = strtolower(trim((string) $request->query->get('email', '')));
        if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return $this->json(['error' => 'A valid email is required.'], 400);
        }

        $orders = $orderRepository->createQueryBuilder('o')
            ->andWhere('LOWER(o.customer_email) = :email')
            ->setParameter('email', $email)
            ->orderBy('o.created_at', 'DESC')
            ->getQuery()
            ->getResult();

        $statusLabels = array_flip(Order::statusChoices());

        $payload = array_map(function (Order $order) use ($email, $statusLabels): array {
            $token = $this->buildAccessToken($order, $email);
            $items = [];

            foreach ($order->getOrderItems() as $orderItem) {
                $product = $orderItem->getProduct();
                $qty = $orderItem->getQuantity() ?? 0;
                $unitPrice = (float) ($orderItem->getPrice() ?? 0);
                $items[] = [
                    'id' => $orderItem->getId(),
                    'product' => $product?->getName(),
                    'image' => $product?->getImage(),
                    'quantity' => $qty,
                    'unit_price' => number_format($unitPrice, 2, '.', ''),
                    'line_total' => number_format($qty * $unitPrice, 2, '.', ''),
                ];
            }

            $status = (string) $order->getStatus();

            return [
                'id' => $order->getId(),
                'email' => $order->getCustomerEmail(),
                'status' => $status,
                'status_label' => $statusLabels[$status] ?? ucfirst($status),
                'total_amount' => (string) $order->getTotalAmount(),
                'shipping_amount' => (string) $order->getShippingAmount(),
                'discount_amount' => (string) $order->getDiscountAmount(),
                'tax_amount' => (string) $order->getTaxAmount(),
                'coupon_code' => $order->getCouponCode(),
                'shipping_method' => $order->getShippingMethod(),
                'tracking_id' => $order->getTrackingId(),
                'refunded_amount' => (string) $order->getRefundedAmount(),
                'payment_method' => $order->getPaymentMethod(),
                'shipping_address' => $order->getShippingAddress(),
                'created_at' => $order->getCreatedAt()?->format(DATE_ATOM),
                'items' => $items,
                'invoice_url' => sprintf('/api/orders/%d/invoice.pdf?email=%s&token=%s', $order->getId(), rawurlencode($email), $token),
                'packing_slip_url' => sprintf('/api/orders/%d/packing-slip.pdf?email=%s&token=%s', $order->getId(), rawurlencode($email), $token),
            ];
        }, $orders);

        return $this->json($payload);
    }

    #[Route('/api/orders/{id}/invoice.pdf', name: 'api_order_invoice_pdf', methods: ['GET'])]
    public function invoice(Order $order, Request $request): Response
    {
        $this->assertCanAccess($order, $request);

        return $this->renderPdf(
            $this->renderView('admin/order_invoice_pdf.html.twig', ['order' => $order]),
            sprintf('invoice-order-%d.pdf', $order->getId())
        );
    }

    #[Route('/api/orders/{id}/packing-slip.pdf', name: 'api_order_packing_slip_pdf', methods: ['GET'])]
    public function packingSlip(Order $order, Request $request): Response
    {
        $this->assertCanAccess($order, $request);

        return $this->renderPdf(
            $this->renderView('admin/order_packing_slip_pdf.html.twig', ['order' => $order]),
            sprintf('packing-slip-order-%d.pdf', $order->getId())
        );
    }

    private function assertCanAccess(Order $order, Request $request): void
    {
        $email = strtolower(trim((string) $request->query->get('email', '')));
        $token = trim((string) $request->query->get('token', ''));

        if ($email === '' || $token === '') {
            throw $this->createAccessDeniedException('Missing access token.');
        }

        if (strtolower((string) $order->getCustomerEmail()) !== $email) {
            throw $this->createAccessDeniedException('Invalid order access.');
        }

        $expected = $this->buildAccessToken($order, $email);
        if (!hash_equals($expected, $token)) {
            throw $this->createAccessDeniedException('Invalid order access token.');
        }
    }

    private function buildAccessToken(Order $order, string $email): string
    {
        $secret = (string) $this->getParameter('kernel.secret');
        $payload = sprintf('%d|%s', $order->getId(), strtolower(trim($email)));

        return hash_hmac('sha256', $payload, $secret);
    }

    private function renderPdf(string $html, string $filename): Response
    {
        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4');
        $dompdf->render();

        return new Response($dompdf->output(), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => sprintf('attachment; filename="%s"', $filename),
        ]);
    }
}
