<?php

namespace App\Entity;

use App\Repository\DeliveryPartnerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DeliveryPartnerRepository::class)]
#[ORM\Table(name: 'delivery_partners')]
class DeliveryPartner
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private string $name = '';

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tracking_url_template = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $support_contact = null;

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
        return $this->name !== '' ? $this->name : 'Delivery Partner';
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

    public function getTrackingUrlTemplate(): ?string
    {
        return $this->tracking_url_template;
    }

    public function setTrackingUrlTemplate(?string $tracking_url_template): static
    {
        $this->tracking_url_template = $tracking_url_template;

        return $this;
    }

    public function getSupportContact(): ?string
    {
        return $this->support_contact;
    }

    public function setSupportContact(?string $support_contact): static
    {
        $this->support_contact = $support_contact;

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
