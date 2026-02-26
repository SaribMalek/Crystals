<?php

namespace App\Entity;

use App\Repository\LicenseKeyRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LicenseKeyRepository::class)]
#[ORM\Table(name: 'license_keys')]
class LicenseKey
{
    public const STATUS_AVAILABLE = 'available';
    public const STATUS_ASSIGNED = 'assigned';
    public const STATUS_REVOKED = 'revoked';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Product $product = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $license_key = null;

    #[ORM\Column(length: 20, options: ['default' => self::STATUS_AVAILABLE])]
    private string $status = self::STATUS_AVAILABLE;

    #[ORM\Column(length: 180, nullable: true)]
    private ?string $assigned_to_email = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $assigned_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public static function statusChoices(): array
    {
        return [
            'Available' => self::STATUS_AVAILABLE,
            'Assigned' => self::STATUS_ASSIGNED,
            'Revoked' => self::STATUS_REVOKED,
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): static
    {
        $this->product = $product;

        return $this;
    }

    public function getLicenseKey(): ?string
    {
        return $this->license_key;
    }

    public function setLicenseKey(string $license_key): static
    {
        $this->license_key = trim($license_key);

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

    public function getAssignedToEmail(): ?string
    {
        return $this->assigned_to_email;
    }

    public function setAssignedToEmail(?string $assigned_to_email): static
    {
        $this->assigned_to_email = $assigned_to_email !== null ? strtolower(trim($assigned_to_email)) : null;

        return $this;
    }

    public function getAssignedAt(): ?\DateTimeImmutable
    {
        return $this->assigned_at;
    }

    public function setAssignedAt(?\DateTimeImmutable $assigned_at): static
    {
        $this->assigned_at = $assigned_at;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }
}

