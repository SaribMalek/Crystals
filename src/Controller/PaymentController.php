<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\OrderItem;
use App\Entity\Customer;
use App\Entity\PaymentFailureLog;
use App\Entity\PaymentSettings;
use App\Entity\PaymentTransaction;
use App\Entity\WebhookLog;
use App\Repository\CustomerRepository;
use App\Repository\PaymentSettingsRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PaymentController extends AbstractController
{
    private const DEFAULT_CURRENCY = 'usd';
    private const FREE_SHIPPING_THRESHOLD = 150.00;
    private const SHIPPING_FEE = 15.00;

    private function getEnv(string $key, string $default = ''): string
    {
        $serverValue = $_SERVER[$key] ?? null;
        if (is_string($serverValue) && $serverValue !== '') {
            return $serverValue;
        }

        $envValue = $_ENV[$key] ?? null;
        if (is_string($envValue) && $envValue !== '') {
            return $envValue;
        }

        $value = getenv($key);
        if (is_string($value) && $value !== '') {
            return $value;
        }

        return $default;
    }

    #[Route('/api/create-checkout-session', name: 'api_checkout_session', methods: ['POST'])]
    public function createSession(
        Request $request,
        ProductRepository $productRepository,
        CustomerRepository $customerRepository,
        PaymentSettingsRepository $paymentSettingsRepository,
        EntityManagerInterface $entityManager
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $items = $data['items'] ?? [];
        $customer = $this->getAuthenticatedCustomer($request, $customerRepository);
        if ($customer === null) {
            return $this->json(['error' => 'Please login before checkout.'], 401);
        }
        if ($customer->getAccountStatus() === Customer::STATUS_BLOCKED) {
            return $this->json(['error' => 'This customer account is blocked. Contact support.'], 403);
        }

        $customerEmail = strtolower((string) $customer->getEmail());
        $shipping = $data['shipping'] ?? [];
        $shippingAddress = trim((string) ($shipping['address'] ?? ''));
        $shippingCity = trim((string) ($shipping['city'] ?? ''));
        $shippingZip = trim((string) ($shipping['zipCode'] ?? ''));
        $customerFirstName = trim((string) ($data['customer']['firstName'] ?? ''));
        $customerLastName = trim((string) ($data['customer']['lastName'] ?? ''));
        $customerFullName = trim($customerFirstName.' '.$customerLastName);
        $paymentData = $data['payment'] ?? [];
        $selectedGateway = strtolower(trim((string) ($paymentData['gateway'] ?? 'stripe')));
        $selectedMethod = strtolower(trim((string) ($paymentData['method'] ?? 'card')));

        if (empty($items)) {
            return $this->json(['error' => 'No items in cart'], 400);
        }

        $settings = $paymentSettingsRepository->findOneBy([]) ?? new PaymentSettings();
        if ($settings->getId() === null) {
            $entityManager->persist($settings);
            $entityManager->flush();
        }

        if (!$this->isGatewayEnabled($settings, $selectedGateway)) {
            return $this->json(['error' => ucfirst($selectedGateway).' gateway is disabled by admin.'], 400);
        }

        if (!$this->isMethodEnabled($settings, $selectedMethod)) {
            return $this->json(['error' => strtoupper($selectedMethod).' payment method is disabled by admin.'], 400);
        }

        if ($selectedGateway !== 'stripe') {
            return $this->json(['error' => ucfirst($selectedGateway).' integration is not configured yet. Use Stripe for now.'], 400);
        }

        if ($selectedMethod !== 'card') {
            return $this->json(['error' => 'Only card method is currently configured for Stripe checkout.'], 400);
        }

        if ($customerFullName !== '') {
            $customer->setFullName($customerFullName);
        }

        $composedAddress = trim(sprintf('%s, %s %s', $shippingAddress, $shippingCity, $shippingZip), ', ');
        if ($composedAddress !== '') {
            $customer->setShippingAddress($composedAddress);
            if ($customer->getBillingAddress() === null || $customer->getBillingAddress() === '') {
                $customer->setBillingAddress($composedAddress);
            }
        }

        $stripeSecretKey = $this->getStripeSecretKey($settings->getMode());
        if ($stripeSecretKey === '') {
            return $this->json(['error' => 'Stripe is not configured for the selected mode.'], 500);
        }

        $currency = strtolower($this->getEnv('STRIPE_CURRENCY', self::DEFAULT_CURRENCY));

        Stripe::setApiKey($stripeSecretKey);

        $lineItems = [];
        $subtotal = 0.0;
        $orderItemsPayload = [];

        foreach ($items as $item) {
            $productId = (int) ($item['id'] ?? 0);
            $quantity = max(1, (int) ($item['quantity'] ?? 1));
            if ($productId <= 0) {
                return $this->json(['error' => 'Invalid product id in cart'], 400);
            }

            $product = $productRepository->find($productId);
            if ($product === null) {
                return $this->json(['error' => sprintf('Product not found (id: %d)', $productId)], 400);
            }

            $unitAmount = (int) round(((float) $product->getPrice()) * 100);
            if ($unitAmount < 50) {
                return $this->json(['error' => sprintf('Invalid product price for "%s"', $product->getName())], 400);
            }

            $lineItems[] = [
                'price_data' => [
                    'currency' => $currency,
                    'product_data' => [
                        'name' => $product->getName(),
                    ],
                    'unit_amount' => $unitAmount,
                ],
                'quantity' => $quantity,
            ];

            $subtotal += ($unitAmount * $quantity) / 100;
            $orderItemsPayload[] = [
                'product' => $product,
                'quantity' => $quantity,
                'price' => number_format($unitAmount / 100, 2, '.', ''),
            ];
        }

        $shippingFee = $subtotal >= self::FREE_SHIPPING_THRESHOLD ? 0.0 : self::SHIPPING_FEE;
        if ($shippingFee > 0) {
            $lineItems[] = [
                'price_data' => [
                    'currency' => $currency,
                    'product_data' => [
                        'name' => 'Shipping',
                    ],
                    'unit_amount' => (int) round($shippingFee * 100),
                ],
                'quantity' => 1,
            ];
        }

        $orderTotal = $subtotal + $shippingFee;

        $order = new Order();
        $order->setCustomerEmail($customerEmail);
        $order->setTotalAmount(number_format($orderTotal, 2, '.', ''));
        $order->setStatus(Order::STATUS_PENDING);
        $order->setPaymentMethod(ucfirst($selectedGateway).' - '.strtoupper($selectedMethod));
        $order->setShippingAddress($composedAddress);
        $order->setShippingAmount(number_format($shippingFee, 2, '.', ''));
        $order->setDiscountAmount('0.00');
        $order->setTaxAmount('0.00');
        $order->setShippingMethod('Flat Rate');

        foreach ($orderItemsPayload as $payload) {
            $orderItem = new OrderItem();
            $orderItem->setOrderRef($order);
            $orderItem->setProduct($payload['product']);
            $orderItem->setQuantity($payload['quantity']);
            $orderItem->setPrice($payload['price']);
            $entityManager->persist($orderItem);
            $order->addOrderItem($orderItem);
        }
        $entityManager->persist($order);

        $transaction = new PaymentTransaction();
        $transaction->setOrderRef($order);
        $transaction->setGateway('stripe');
        $transaction->setMethod('card');
        $transaction->setMode($settings->getMode());
        $transaction->setStatus(PaymentTransaction::STATUS_INITIATED);
        $transaction->setAmount(number_format($orderTotal, 2, '.', ''));
        $transaction->setCurrency($currency);
        $transaction->setCustomerEmail($customerEmail);
        $transaction->setNote('Checkout session initiated.');
        $entityManager->persist($transaction);

        $entityManager->flush();

        try {
            $baseUrl = $request->getSchemeAndHttpHost();
            $session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => $lineItems,
                'mode' => 'payment',
                'client_reference_id' => (string) $order->getId(),
                'customer_email' => $customerEmail,
                'metadata' => [
                    'order_id' => (string) $order->getId(),
                ],
                'success_url' => $baseUrl.'/checkout?status=success&session_id={CHECKOUT_SESSION_ID}',
                'cancel_url' => $baseUrl.'/checkout?status=cancel&order_id='.$order->getId(),
            ]);

            $transaction->setExternalId((string) $session->id);
            $transaction->setNote('Stripe checkout session created.');
            $entityManager->flush();

            return $this->json(['id' => $session->id, 'url' => $session->url]);
        } catch (\Exception $e) {
            $order->setStatus(Order::STATUS_CANCELLED);
            $transaction->setStatus(PaymentTransaction::STATUS_FAILED);
            $transaction->setNote('Checkout session failed: '.$e->getMessage());
            $this->logPaymentFailure($entityManager, $order, $customerEmail, 'stripe', 'card', null, $e->getMessage(), $data);
            $entityManager->flush();
            return $this->json(['error' => $e->getMessage()], 500);
        }
    }

    #[Route('/api/checkout-session-status', name: 'api_checkout_session_status', methods: ['GET'])]
    public function sessionStatus(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $sessionId = trim((string) $request->query->get('session_id', ''));
        if ($sessionId === '') {
            return $this->json(['error' => 'Missing session_id'], 400);
        }

        $settings = $entityManager->getRepository(PaymentSettings::class)->findOneBy([]) ?? new PaymentSettings();
        $stripeSecretKey = $this->getStripeSecretKey($settings->getMode());
        if ($stripeSecretKey === '') {
            return $this->json(['error' => 'Stripe is not configured for the selected mode.'], 500);
        }

        Stripe::setApiKey($stripeSecretKey);

        try {
            $session = Session::retrieve($sessionId);
            $paymentStatus = (string) ($session->payment_status ?? 'unpaid');
            $orderId = (int) ($session->client_reference_id ?? 0);
            /** @var PaymentTransaction|null $transaction */
            $transaction = $entityManager->getRepository(PaymentTransaction::class)->findOneBy(['external_id' => $sessionId]);
            if ($transaction !== null) {
                $transaction->setStatus($paymentStatus === 'paid' ? PaymentTransaction::STATUS_SUCCESS : PaymentTransaction::STATUS_FAILED);
                $transaction->setNote('Stripe status check: '.$paymentStatus);
            }

            if ($orderId > 0) {
                /** @var Order|null $order */
                $order = $entityManager->getRepository(Order::class)->find($orderId);
                if ($order !== null && $paymentStatus === 'paid' && $order->getStatus() !== Order::STATUS_PAID) {
                    $order->setStatus(Order::STATUS_PAID);
                    $entityManager->flush();
                } elseif ($order !== null && $paymentStatus !== 'paid') {
                    $this->logPaymentFailure(
                        $entityManager,
                        $order,
                        $order->getCustomerEmail(),
                        'stripe',
                        'card',
                        null,
                        'Payment status is '.$paymentStatus,
                        ['session_id' => $sessionId]
                    );
                    $entityManager->flush();
                }
            }

            return $this->json([
                'payment_status' => $paymentStatus,
                'order_id' => $orderId > 0 ? $orderId : null,
            ]);
        } catch (\Exception $e) {
            $this->logPaymentFailure(
                $entityManager,
                null,
                null,
                'stripe',
                'card',
                null,
                $e->getMessage(),
                ['session_id' => $sessionId]
            );
            $entityManager->flush();
            return $this->json(['error' => $e->getMessage()], 500);
        }
    }

    #[Route('/api/webhooks/stripe', name: 'api_webhook_stripe', methods: ['POST'])]
    public function stripeWebhook(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $payload = (string) $request->getContent();
        $decoded = json_decode($payload, true);
        $eventType = is_array($decoded) ? (string) ($decoded['type'] ?? 'unknown') : 'unknown';

        $log = new WebhookLog();
        $log->setProvider('stripe');
        $log->setEventType($eventType);
        $log->setStatusCode(200);
        $log->setPayload($payload);
        $log->setResponseMessage('Webhook received');
        $entityManager->persist($log);
        $entityManager->flush();

        return $this->json(['received' => true, 'event' => $eventType]);
    }

    private function isGatewayEnabled(PaymentSettings $settings, string $gateway): bool
    {
        return match ($gateway) {
            'stripe' => $settings->isGatewayStripeEnabled(),
            'razorpay' => $settings->isGatewayRazorpayEnabled(),
            'paypal' => $settings->isGatewayPaypalEnabled(),
            default => false,
        };
    }

    private function isMethodEnabled(PaymentSettings $settings, string $method): bool
    {
        return match ($method) {
            'card' => $settings->isMethodCardEnabled(),
            'upi' => $settings->isMethodUpiEnabled(),
            'net_banking' => $settings->isMethodNetBankingEnabled(),
            'wallet', 'wallets' => $settings->isMethodWalletEnabled(),
            default => false,
        };
    }

    private function getStripeSecretKey(string $mode): string
    {
        if ($mode === PaymentSettings::MODE_LIVE) {
            return $this->getEnv('STRIPE_SECRET_KEY_LIVE', $this->getEnv('STRIPE_SECRET_KEY'));
        }

        return $this->getEnv('STRIPE_SECRET_KEY_TEST', $this->getEnv('STRIPE_SECRET_KEY'));
    }

    private function getAuthenticatedCustomer(Request $request, CustomerRepository $customerRepository): ?Customer
    {
        $session = $request->getSession();
        $customerId = (int) $session->get('customer_auth_id', 0);
        if ($customerId <= 0) {
            return null;
        }

        return $customerRepository->find($customerId);
    }

    private function logPaymentFailure(
        EntityManagerInterface $entityManager,
        ?Order $order,
        ?string $customerEmail,
        ?string $gateway,
        ?string $method,
        ?string $errorCode,
        string $errorMessage,
        ?array $contextPayload
    ): void {
        $failure = new PaymentFailureLog();
        $failure->setOrderRef($order);
        $failure->setCustomerEmail($customerEmail !== null ? strtolower(trim($customerEmail)) : null);
        $failure->setGateway($gateway);
        $failure->setMethod($method);
        $failure->setErrorCode($errorCode);
        $failure->setErrorMessage($errorMessage);
        $failure->setContextPayload($contextPayload !== null ? json_encode($contextPayload, JSON_UNESCAPED_SLASHES) : null);
        $entityManager->persist($failure);
    }
}
