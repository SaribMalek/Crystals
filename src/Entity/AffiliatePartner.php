<?php

namespace App\Entity;

use App\Repository\AffiliatePartnerRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AffiliatePartnerRepository::class)]
#[ORM\Table(name: 'affiliate_partners')]
class AffiliatePartner
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 140)]
    private ?string $name = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column(length: 80, unique: true)]
    private ?string $affiliate_code = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2, options: ['default' => '5.00'])]
    private string $commission_rate = '5.00';

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public function __toString(): string
    {
        return (string) ($this->name ?? 'Affiliate');
    }

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
        $this->name = trim($name);

        return $this;
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

    public function getAffiliateCode(): ?string
    {
        return $this->affiliate_code;
    }

    public function setAffiliateCode(string $affiliate_code): static
    {
        $this->affiliate_code = strtoupper(trim($affiliate_code));

        return $this;
    }

    public function getCommissionRate(): string
    {
        return $this->commission_rate;
    }

    public function setCommissionRate(string $commission_rate): static
    {
        $this->commission_rate = $commission_rate;

        return $this;
    }

    public function isActive(): bool
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

