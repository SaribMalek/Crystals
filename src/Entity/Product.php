<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['product:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['product:read'])]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['product:read'])]
    private ?string $description = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    #[Groups(['product:read'])]
    private ?string $price = null;

    #[ORM\ManyToOne(inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['product:read'])]
    private ?Category $category = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['product:read'])]
    private ?string $image = null;

    #[ORM\Column]
    #[Groups(['product:read'])]
    private ?bool $is_sale = false;

    #[ORM\Column]
    #[Groups(['product:read'])]
    private ?bool $is_featured = false;

    #[ORM\Column]
    #[Groups(['product:read'])]
    private int $stock = 0;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, nullable: true)]
    #[Groups(['product:read'])]
    private ?string $old_price = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $supplier_reference = null;

    #[ORM\Column(length: 40, options: ['default' => 'standard'])]
    private string $tax_class = 'standard';

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true)]
    private ?Vendor $vendor = null;

    #[ORM\Column(options: ['default' => false])]
    private bool $is_subscription = false;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $subscription_interval = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, nullable: true)]
    private ?string $subscription_price = null;

    #[ORM\Column(options: ['default' => false])]
    private bool $is_digital = false;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $digital_download_url = null;

    #[ORM\Column(options: ['default' => false])]
    private bool $license_key_required = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function isIsSale(): ?bool
    {
        return $this->is_sale;
    }

    public function setIsSale(bool $is_sale): static
    {
        $this->is_sale = $is_sale;

        return $this;
    }

    public function isIsFeatured(): ?bool
    {
        return $this->is_featured;
    }

    public function setIsFeatured(bool $is_featured): static
    {
        $this->is_featured = $is_featured;

        return $this;
    }

    public function getStock(): int
    {
        return $this->stock;
    }

    public function setStock(int $stock): static
    {
        $this->stock = $stock;

        return $this;
    }

    public function getOldPrice(): ?string
    {
        return $this->old_price;
    }

    public function setOldPrice(?string $old_price): static
    {
        $this->old_price = $old_price;

        return $this;
    }

    public function getSupplierReference(): ?string
    {
        return $this->supplier_reference;
    }

    public function setSupplierReference(?string $supplier_reference): static
    {
        $this->supplier_reference = $supplier_reference;

        return $this;
    }

    public function getTaxClass(): string
    {
        return $this->tax_class;
    }

    public function setTaxClass(string $tax_class): static
    {
        $this->tax_class = $tax_class;

        return $this;
    }

    public function getVendor(): ?Vendor
    {
        return $this->vendor;
    }

    public function setVendor(?Vendor $vendor): static
    {
        $this->vendor = $vendor;

        return $this;
    }

    public function isSubscription(): bool
    {
        return $this->is_subscription;
    }

    public function setIsSubscription(bool $is_subscription): static
    {
        $this->is_subscription = $is_subscription;

        return $this;
    }

    public function getSubscriptionInterval(): ?string
    {
        return $this->subscription_interval;
    }

    public function setSubscriptionInterval(?string $subscription_interval): static
    {
        $this->subscription_interval = $subscription_interval;

        return $this;
    }

    public function getSubscriptionPrice(): ?string
    {
        return $this->subscription_price;
    }

    public function setSubscriptionPrice(?string $subscription_price): static
    {
        $this->subscription_price = $subscription_price;

        return $this;
    }

    public function isDigital(): bool
    {
        return $this->is_digital;
    }

    public function setIsDigital(bool $is_digital): static
    {
        $this->is_digital = $is_digital;

        return $this;
    }

    public function getDigitalDownloadUrl(): ?string
    {
        return $this->digital_download_url;
    }

    public function setDigitalDownloadUrl(?string $digital_download_url): static
    {
        $this->digital_download_url = $digital_download_url;

        return $this;
    }

    public function isLicenseKeyRequired(): bool
    {
        return $this->license_key_required;
    }

    public function setLicenseKeyRequired(bool $license_key_required): static
    {
        $this->license_key_required = $license_key_required;

        return $this;
    }

    public function __toString(): string
    {
        return (string) ($this->name ?? ('Product #' . (string) ($this->id ?? '')));
    }
}
