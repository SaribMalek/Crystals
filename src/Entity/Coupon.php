<?php

namespace App\Entity;

use App\Repository\CouponRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CouponRepository::class)]
#[ORM\Table(name: 'coupons')]
#[ORM\UniqueConstraint(name: 'uniq_coupon_code', columns: ['code'])]
class Coupon
{
    public const TYPE_PERCENTAGE = 'percentage';
    public const TYPE_FIXED = 'fixed';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 60)]
    private string $code = '';

    #[ORM\Column(length: 20)]
    private string $discount_type = self::TYPE_PERCENTAGE;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    private string $discount_value = '0.00';

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $expiry_date = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $minimum_cart_value = '0.00';

    #[ORM\Column(length: 180, nullable: true)]
    private ?string $user_email = null;

    #[ORM\Column(nullable: true)]
    private ?int $usage_limit = null;

    #[ORM\Column(options: ['default' => 0])]
    private int $usage_count = 0;

    #[ORM\Column(options: ['default' => false])]
    private bool $auto_apply = false;

    #[ORM\Column(options: ['default' => false])]
    private bool $festival_sale_rule = false;

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public static function discountTypeChoices(): array
    {
        return [
            'Percentage' => self::TYPE_PERCENTAGE,
            'Fixed Amount' => self::TYPE_FIXED,
        ];
    }

    public function __toString(): string
    {
        return $this->code !== '' ? $this->code : 'Coupon';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = strtoupper(trim($code));

        return $this;
    }

    public function getDiscountType(): string
    {
        return $this->discount_type;
    }

    public function setDiscountType(string $discount_type): static
    {
        $this->discount_type = $discount_type;

        return $this;
    }

    public function getDiscountValue(): string
    {
        return $this->discount_value;
    }

    public function setDiscountValue(string $discount_value): static
    {
        $this->discount_value = $discount_value;

        return $this;
    }

    public function getExpiryDate(): ?\DateTimeImmutable
    {
        return $this->expiry_date;
    }

    public function setExpiryDate(?\DateTimeImmutable $expiry_date): static
    {
        $this->expiry_date = $expiry_date;

        return $this;
    }

    public function getMinimumCartValue(): string
    {
        return $this->minimum_cart_value;
    }

    public function setMinimumCartValue(string $minimum_cart_value): static
    {
        $this->minimum_cart_value = $minimum_cart_value;

        return $this;
    }

    public function getUserEmail(): ?string
    {
        return $this->user_email;
    }

    public function setUserEmail(?string $user_email): static
    {
        $this->user_email = $user_email !== null ? strtolower(trim($user_email)) : null;

        return $this;
    }

    public function getUsageLimit(): ?int
    {
        return $this->usage_limit;
    }

    public function setUsageLimit(?int $usage_limit): static
    {
        $this->usage_limit = $usage_limit;

        return $this;
    }

    public function getUsageCount(): int
    {
        return $this->usage_count;
    }

    public function setUsageCount(int $usage_count): static
    {
        $this->usage_count = $usage_count;

        return $this;
    }

    public function isAutoApply(): bool
    {
        return $this->auto_apply;
    }

    public function setAutoApply(bool $auto_apply): static
    {
        $this->auto_apply = $auto_apply;

        return $this;
    }

    public function isFestivalSaleRule(): bool
    {
        return $this->festival_sale_rule;
    }

    public function setFestivalSaleRule(bool $festival_sale_rule): static
    {
        $this->festival_sale_rule = $festival_sale_rule;

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
