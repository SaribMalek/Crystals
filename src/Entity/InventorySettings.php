<?php

namespace App\Entity;

use App\Repository\InventorySettingsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InventorySettingsRepository::class)]
class InventorySettings
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private bool $stock_tracking_enabled = true;

    #[ORM\Column]
    private int $low_stock_threshold = 5;

    #[ORM\Column]
    private bool $out_of_stock_notifications_enabled = true;

    public function __toString(): string
    {
        return 'Inventory Settings';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isStockTrackingEnabled(): bool
    {
        return $this->stock_tracking_enabled;
    }

    public function setStockTrackingEnabled(bool $stock_tracking_enabled): static
    {
        $this->stock_tracking_enabled = $stock_tracking_enabled;

        return $this;
    }

    public function getLowStockThreshold(): int
    {
        return $this->low_stock_threshold;
    }

    public function setLowStockThreshold(int $low_stock_threshold): static
    {
        $this->low_stock_threshold = max(0, $low_stock_threshold);

        return $this;
    }

    public function isOutOfStockNotificationsEnabled(): bool
    {
        return $this->out_of_stock_notifications_enabled;
    }

    public function setOutOfStockNotificationsEnabled(bool $out_of_stock_notifications_enabled): static
    {
        $this->out_of_stock_notifications_enabled = $out_of_stock_notifications_enabled;

        return $this;
    }
}
