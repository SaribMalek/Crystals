<?php

namespace App\Entity;

use App\Repository\ShipmentTrackingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShipmentTrackingRepository::class)]
#[ORM\Table(name: 'shipment_tracking')]
class ShipmentTracking
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $order_id = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $delivery_partner = null;

    #[ORM\Column(length: 120)]
    private string $tracking_id = '';

    #[ORM\Column(length: 40, options: ['default' => 'created'])]
    private string $status = 'created';

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $estimated_delivery_time = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $shipped_at = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $delivered_at = null;

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

    public function getOrderId(): ?int
    {
        return $this->order_id;
    }

    public function setOrderId(?int $order_id): static
    {
        $this->order_id = $order_id;

        return $this;
    }

    public function getDeliveryPartner(): ?string
    {
        return $this->delivery_partner;
    }

    public function setDeliveryPartner(?string $delivery_partner): static
    {
        $this->delivery_partner = $delivery_partner;

        return $this;
    }

    public function getTrackingId(): string
    {
        return $this->tracking_id;
    }

    public function setTrackingId(string $tracking_id): static
    {
        $this->tracking_id = trim($tracking_id);

        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getEstimatedDeliveryTime(): ?string
    {
        return $this->estimated_delivery_time;
    }

    public function setEstimatedDeliveryTime(?string $estimated_delivery_time): static
    {
        $this->estimated_delivery_time = $estimated_delivery_time;

        return $this;
    }

    public function getShippedAt(): ?\DateTimeImmutable
    {
        return $this->shipped_at;
    }

    public function setShippedAt(?\DateTimeImmutable $shipped_at): static
    {
        $this->shipped_at = $shipped_at;

        return $this;
    }

    public function getDeliveredAt(): ?\DateTimeImmutable
    {
        return $this->delivered_at;
    }

    public function setDeliveredAt(?\DateTimeImmutable $delivered_at): static
    {
        $this->delivered_at = $delivered_at;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }
}
