<?php

namespace App\Entity;

use App\Repository\PosIntegrationSettingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PosIntegrationSettingRepository::class)]
#[ORM\Table(name: 'pos_integration_settings')]
#[ORM\HasLifecycleCallbacks]
class PosIntegrationSetting
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(options: ['default' => false])]
    private bool $is_enabled = false;

    #[ORM\Column(length: 80, nullable: true)]
    private ?string $provider = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $api_url = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $api_key = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $location_id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    public function __construct()
    {
        $this->updated_at = new \DateTimeImmutable();
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function touch(): void
    {
        $this->updated_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isEnabled(): bool
    {
        return $this->is_enabled;
    }

    public function setIsEnabled(bool $is_enabled): static
    {
        $this->is_enabled = $is_enabled;

        return $this;
    }

    public function getProvider(): ?string
    {
        return $this->provider;
    }

    public function setProvider(?string $provider): static
    {
        $this->provider = $provider;

        return $this;
    }

    public function getApiUrl(): ?string
    {
        return $this->api_url;
    }

    public function setApiUrl(?string $api_url): static
    {
        $this->api_url = $api_url;

        return $this;
    }

    public function getApiKey(): ?string
    {
        return $this->api_key;
    }

    public function setApiKey(?string $api_key): static
    {
        $this->api_key = $api_key;

        return $this;
    }

    public function getLocationId(): ?string
    {
        return $this->location_id;
    }

    public function setLocationId(?string $location_id): static
    {
        $this->location_id = $location_id;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }
}
