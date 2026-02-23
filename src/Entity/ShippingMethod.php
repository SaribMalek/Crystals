<?php

namespace App\Entity;

use App\Repository\ShippingMethodRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShippingMethodRepository::class)]
#[ORM\Table(name: 'shipping_methods')]
class ShippingMethod
{
    public const TYPE_FLAT_RATE = 'flat_rate';
    public const TYPE_FREE_SHIPPING = 'free_shipping';
    public const TYPE_WEIGHT_BASED = 'weight_based';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private string $name = '';

    #[ORM\Column(length: 30)]
    private string $type = self::TYPE_FLAT_RATE;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true, onDelete: 'SET NULL')]
    private ?ShippingZone $zone = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $flat_rate = '0.00';

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $free_shipping_min_order = '0.00';

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $weight_based_rate = '0.00';

    #[ORM\Column(length: 80, nullable: true)]
    private ?string $delivery_partner = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $estimated_delivery_time = null;

    #[ORM\Column(options: ['default' => false])]
    private bool $cod_enabled = false;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $cod_min_order = '0.00';

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $cod_max_order = '0.00';

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public static function typeChoices(): array
    {
        return [
            'Flat Rate' => self::TYPE_FLAT_RATE,
            'Free Shipping' => self::TYPE_FREE_SHIPPING,
            'Weight-based' => self::TYPE_WEIGHT_BASED,
        ];
    }

    public function __toString(): string
    {
        return $this->name !== '' ? $this->name : 'Shipping Method';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = trim($name);

        return $this;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getZone(): ?ShippingZone
    {
        return $this->zone;
    }

    public function setZone(?ShippingZone $zone): static
    {
        $this->zone = $zone;

        return $this;
    }

    public function getFlatRate(): string
    {
        return $this->flat_rate;
    }

    public function setFlatRate(string $flat_rate): static
    {
        $this->flat_rate = $flat_rate;

        return $this;
    }

    public function getFreeShippingMinOrder(): string
    {
        return $this->free_shipping_min_order;
    }

    public function setFreeShippingMinOrder(string $free_shipping_min_order): static
    {
        $this->free_shipping_min_order = $free_shipping_min_order;

        return $this;
    }

    public function getWeightBasedRate(): string
    {
        return $this->weight_based_rate;
    }

    public function setWeightBasedRate(string $weight_based_rate): static
    {
        $this->weight_based_rate = $weight_based_rate;

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

    public function getEstimatedDeliveryTime(): ?string
    {
        return $this->estimated_delivery_time;
    }

    public function setEstimatedDeliveryTime(?string $estimated_delivery_time): static
    {
        $this->estimated_delivery_time = $estimated_delivery_time;

        return $this;
    }

    public function isCodEnabled(): bool
    {
        return $this->cod_enabled;
    }

    public function setCodEnabled(bool $cod_enabled): static
    {
        $this->cod_enabled = $cod_enabled;

        return $this;
    }

    public function getCodMinOrder(): string
    {
        return $this->cod_min_order;
    }

    public function setCodMinOrder(string $cod_min_order): static
    {
        $this->cod_min_order = $cod_min_order;

        return $this;
    }

    public function getCodMaxOrder(): string
    {
        return $this->cod_max_order;
    }

    public function setCodMaxOrder(string $cod_max_order): static
    {
        $this->cod_max_order = $cod_max_order;

        return $this;
    }

    public function isIsActive(): bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): static
    {
        $this->is_active = $is_active;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }
}
