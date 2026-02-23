<?php

namespace App\Entity;

use App\Repository\TaxRuleRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TaxRuleRepository::class)]
#[ORM\Table(name: 'tax_rules')]
class TaxRule
{
    public const TYPE_GST = 'gst';
    public const TYPE_VAT = 'vat';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 120)]
    private string $name = '';

    #[ORM\Column(length: 20)]
    private string $tax_type = self::TYPE_GST;

    #[ORM\Column(length: 80)]
    private string $country = '';

    #[ORM\Column(length: 80, nullable: true)]
    private ?string $state = null;

    #[ORM\Column(length: 80, options: ['default' => 'standard'])]
    private string $product_tax_class = 'standard';

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2, options: ['default' => '0.00'])]
    private string $rate = '0.00';

    #[ORM\Column(options: ['default' => false])]
    private bool $is_inclusive = false;

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public static function taxTypeChoices(): array
    {
        return [
            'GST' => self::TYPE_GST,
            'VAT' => self::TYPE_VAT,
        ];
    }

    public static function productTaxClassChoices(): array
    {
        return [
            'Standard' => 'standard',
            'Reduced' => 'reduced',
            'Zero' => 'zero',
            'Exempt' => 'exempt',
        ];
    }

    public function __toString(): string
    {
        return $this->name !== '' ? $this->name : 'Tax Rule';
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

    public function getTaxType(): string
    {
        return $this->tax_type;
    }

    public function setTaxType(string $tax_type): static
    {
        $this->tax_type = $tax_type;

        return $this;
    }

    public function getCountry(): string
    {
        return $this->country;
    }

    public function setCountry(string $country): static
    {
        $this->country = trim($country);

        return $this;
    }

    public function getState(): ?string
    {
        return $this->state;
    }

    public function setState(?string $state): static
    {
        $this->state = $state;

        return $this;
    }

    public function getProductTaxClass(): string
    {
        return $this->product_tax_class;
    }

    public function setProductTaxClass(string $product_tax_class): static
    {
        $this->product_tax_class = $product_tax_class;

        return $this;
    }

    public function getRate(): string
    {
        return $this->rate;
    }

    public function setRate(string $rate): static
    {
        $this->rate = $rate;

        return $this;
    }

    public function isIsInclusive(): bool
    {
        return $this->is_inclusive;
    }

    public function setIsInclusive(bool $is_inclusive): static
    {
        $this->is_inclusive = $is_inclusive;

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
