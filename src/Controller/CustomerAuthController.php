<?php

namespace App\Controller;

use App\Entity\Customer;
use App\Repository\CustomerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CustomerAuthController extends AbstractController
{
    private const SESSION_KEY = 'customer_auth_id';

    #[Route('/api/customer/signup', name: 'api_customer_signup', methods: ['POST'])]
    public function signup(Request $request, CustomerRepository $customerRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $email = strtolower(trim((string) ($data['email'] ?? '')));
        $password = (string) ($data['password'] ?? '');
        $fullName = trim((string) ($data['full_name'] ?? ''));

        if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return $this->json(['error' => 'A valid email is required.'], 400);
        }

        if (mb_strlen($password) < 8) {
            return $this->json(['error' => 'Password must be at least 8 characters.'], 400);
        }

        $customer = $customerRepository->findOneBy(['email' => $email]);
        if ($customer !== null && $customer->getAccountStatus() === Customer::STATUS_BLOCKED) {
            return $this->json(['error' => 'This account is blocked. Contact support.'], 403);
        }

        if ($customer !== null && $customer->getPasswordHash() !== null && $customer->getPasswordHash() !== '') {
            return $this->json(['error' => 'An account already exists for this email.'], 409);
        }

        if ($customer === null) {
            $customer = new Customer();
            $customer->setEmail($email);
            $entityManager->persist($customer);
        }

        if ($fullName !== '') {
            $customer->setFullName($fullName);
        }

        $customer->setPasswordHash(password_hash($password, PASSWORD_DEFAULT));
        $entityManager->flush();

        return $this->json([
            'authenticated' => false,
            'message' => 'Registration successful. Please login to continue.',
        ]);
    }

    #[Route('/api/customer/login', name: 'api_customer_login', methods: ['POST'])]
    public function login(Request $request, CustomerRepository $customerRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $email = strtolower(trim((string) ($data['email'] ?? '')));
        $password = (string) ($data['password'] ?? '');

        if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
            return $this->json(['error' => 'Email and password are required.'], 400);
        }

        $customer = $customerRepository->findOneBy(['email' => $email]);
        if ($customer === null || $customer->getPasswordHash() === null || $customer->getPasswordHash() === '' || !password_verify($password, $customer->getPasswordHash())) {
            return $this->json(['error' => 'Invalid email or password.'], 401);
        }

        if ($customer->getAccountStatus() === Customer::STATUS_BLOCKED) {
            return $this->json(['error' => 'This account is blocked. Contact support.'], 403);
        }

        $session = $request->getSession();
        $session->migrate(true);
        $session->set(self::SESSION_KEY, $customer->getId());

        return $this->json([
            'authenticated' => true,
            'customer' => $this->buildCustomerPayload($customer),
        ]);
    }

    #[Route('/api/customer/logout', name: 'api_customer_logout', methods: ['POST'])]
    public function logout(Request $request): JsonResponse
    {
        $session = $request->getSession();
        $session->remove(self::SESSION_KEY);
        $session->migrate(true);

        return $this->json(['authenticated' => false]);
    }

    #[Route('/api/customer/me', name: 'api_customer_me', methods: ['GET'])]
    public function me(Request $request, CustomerRepository $customerRepository): JsonResponse
    {
        $session = $request->getSession();
        $customerId = (int) $session->get(self::SESSION_KEY, 0);
        if ($customerId <= 0) {
            return $this->json(['authenticated' => false, 'customer' => null]);
        }

        $customer = $customerRepository->find($customerId);
        if ($customer === null || $customer->getAccountStatus() === Customer::STATUS_BLOCKED) {
            $session->remove(self::SESSION_KEY);

            return $this->json(['authenticated' => false, 'customer' => null]);
        }

        return $this->json([
            'authenticated' => true,
            'customer' => $this->buildCustomerPayload($customer),
        ]);
    }

    private function buildCustomerPayload(Customer $customer): array
    {
        return [
            'id' => $customer->getId(),
            'email' => $customer->getEmail(),
            'full_name' => $customer->getFullName(),
        ];
    }
}
