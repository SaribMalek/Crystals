<?php

namespace App\Entity;

use App\Repository\CustomerRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CustomerRepository::class)]
#[ORM\Table(name: 'customers')]
#[ORM\UniqueConstraint(name: 'uniq_customers_email', columns: ['email'])]
#[ORM\HasLifecycleCallbacks]
class Customer
{
    public const STATUS_ACTIVE = 'active';
    public const STATUS_BLOCKED = 'blocked';

    public const GROUP_RETAIL = 'retail';
    public const GROUP_WHOLESALE = 'wholesale';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $full_name = null;

    #[ORM\Column(length: 30, nullable: true)]
    private ?string $phone = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $billing_address = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $shipping_address = null;

    #[ORM\Column(length: 20, options: ['default' => self::STATUS_ACTIVE])]
    private ?string $account_status = self::STATUS_ACTIVE;

    #[ORM\Column(length: 20, options: ['default' => self::GROUP_RETAIL])]
    private ?string $customer_group = self::GROUP_RETAIL;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $password_hash = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $profile_image = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    public function __construct()
    {
        $now = new \DateTimeImmutable();
        $this->created_at = $now;
        $this->updated_at = $now;
        $this->account_status = self::STATUS_ACTIVE;
        $this->customer_group = self::GROUP_RETAIL;
    }

    #[ORM\PrePersist]
    public function onCreate(): void
    {
        $now = new \DateTimeImmutable();
        if ($this->created_at === null) {
            $this->created_at = $now;
        }
        $this->updated_at = $now;
    }

    #[ORM\PreUpdate]
    public function onUpdate(): void
    {
        $this->updated_at = new \DateTimeImmutable();
    }

    public static function statusChoices(): array
    {
        return [
            'Active' => self::STATUS_ACTIVE,
            'Blocked' => self::STATUS_BLOCKED,
        ];
    }

    public static function groupChoices(): array
    {
        return [
            'Retail' => self::GROUP_RETAIL,
            'Wholesale' => self::GROUP_WHOLESALE,
        ];
    }

    public function __toString(): string
    {
        return $this->full_name ?: (string) $this->email;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = strtolower(trim($email));

        return $this;
    }

    public function getFullName(): ?string
    {
        return $this->full_name;
    }

    public function setFullName(?string $full_name): static
    {
        $this->full_name = $full_name !== null ? trim($full_name) : null;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getBillingAddress(): ?string
    {
        return $this->billing_address;
    }

    public function setBillingAddress(?string $billing_address): static
    {
        $this->billing_address = $billing_address;

        return $this;
    }

    public function getShippingAddress(): ?string
    {
        return $this->shipping_address;
    }

    public function setShippingAddress(?string $shipping_address): static
    {
        $this->shipping_address = $shipping_address;

        return $this;
    }

    public function getAccountStatus(): ?string
    {
        return $this->account_status;
    }

    public function setAccountStatus(string $account_status): static
    {
        $this->account_status = $account_status;

        return $this;
    }

    public function getCustomerGroup(): ?string
    {
        return $this->customer_group;
    }

    public function setCustomerGroup(string $customer_group): static
    {
        $this->customer_group = $customer_group;

        return $this;
    }

    public function getPasswordHash(): ?string
    {
        return $this->password_hash;
    }

    public function setPasswordHash(?string $password_hash): static
    {
        $this->password_hash = $password_hash;

        return $this;
    }

    public function getProfileImage(): ?string
    {
        return $this->profile_image;
    }

    public function setProfileImage(?string $profile_image): static
    {
        $this->profile_image = $profile_image;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeImmutable $updated_at): static
    {
        $this->updated_at = $updated_at;

        return $this;
    }
}
