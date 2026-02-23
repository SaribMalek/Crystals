<?php

namespace App\Entity;

use App\Repository\PaymentFailureLogRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PaymentFailureLogRepository::class)]
#[ORM\Table(name: 'payment_failure_logs')]
class PaymentFailureLog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true, onDelete: 'SET NULL')]
    private ?Order $order_ref = null;

    #[ORM\Column(length: 180, nullable: true)]
    private ?string $customer_email = null;

    #[ORM\Column(length: 40, nullable: true)]
    private ?string $gateway = null;

    #[ORM\Column(length: 40, nullable: true)]
    private ?string $method = null;

    #[ORM\Column(length: 150, nullable: true)]
    private ?string $error_code = null;

    #[ORM\Column(type: Types::TEXT)]
    private string $error_message = '';

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $context_payload = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderRef(): ?Order
    {
        return $this->order_ref;
    }

    public function setOrderRef(?Order $order_ref): static
    {
        $this->order_ref = $order_ref;

        return $this;
    }

    public function getCustomerEmail(): ?string
    {
        return $this->customer_email;
    }

    public function setCustomerEmail(?string $customer_email): static
    {
        $this->customer_email = $customer_email;

        return $this;
    }

    public function getGateway(): ?string
    {
        return $this->gateway;
    }

    public function setGateway(?string $gateway): static
    {
        $this->gateway = $gateway;

        return $this;
    }

    public function getMethod(): ?string
    {
        return $this->method;
    }

    public function setMethod(?string $method): static
    {
        $this->method = $method;

        return $this;
    }

    public function getErrorCode(): ?string
    {
        return $this->error_code;
    }

    public function setErrorCode(?string $error_code): static
    {
        $this->error_code = $error_code;

        return $this;
    }

    public function getErrorMessage(): string
    {
        return $this->error_message;
    }

    public function setErrorMessage(string $error_message): static
    {
        $this->error_message = $error_message;

        return $this;
    }

    public function getContextPayload(): ?string
    {
        return $this->context_payload;
    }

    public function setContextPayload(?string $context_payload): static
    {
        $this->context_payload = $context_payload;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }
}
