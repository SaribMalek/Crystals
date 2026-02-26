<?php

namespace App\Entity;

use App\Repository\WebhookLogRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WebhookLogRepository::class)]
#[ORM\Table(name: 'webhook_logs')]
class WebhookLog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 60)]
    private ?string $provider = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $event_type = null;

    #[ORM\Column(nullable: true)]
    private ?int $status_code = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $payload = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $response_message = null;

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

    public function getProvider(): ?string
    {
        return $this->provider;
    }

    public function setProvider(string $provider): static
    {
        $this->provider = strtolower(trim($provider));

        return $this;
    }

    public function getEventType(): ?string
    {
        return $this->event_type;
    }

    public function setEventType(?string $event_type): static
    {
        $this->event_type = $event_type;

        return $this;
    }

    public function getStatusCode(): ?int
    {
        return $this->status_code;
    }

    public function setStatusCode(?int $status_code): static
    {
        $this->status_code = $status_code;

        return $this;
    }

    public function getPayload(): ?string
    {
        return $this->payload;
    }

    public function setPayload(?string $payload): static
    {
        $this->payload = $payload;

        return $this;
    }

    public function getResponseMessage(): ?string
    {
        return $this->response_message;
    }

    public function setResponseMessage(?string $response_message): static
    {
        $this->response_message = $response_message;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }
}

