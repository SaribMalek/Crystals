<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'abandoned_carts')]
class AbandonedCart
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $customer_email = '';

    #[ORM\Column(type: Types::JSON)]
    private array $cart_items = [];

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $cart_total = '0.00';

    #[ORM\Column]
    private ?\DateTimeImmutable $last_activity_at = null;

    #[ORM\Column(options: ['default' => false])]
    private bool $is_recovered = false;

    #[ORM\Column(options: ['default' => false])]
    private bool $is_notified = false;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $now = new \DateTimeImmutable();
        $this->created_at = $now;
        $this->last_activity_at = $now;
    }

    public function getId(): ?int { return $this->id; }
    public function getCustomerEmail(): string { return $this->customer_email; }
    public function setCustomerEmail(string $customer_email): static { $this->customer_email = strtolower(trim($customer_email)); return $this; }
    public function getCartItems(): array { return $this->cart_items; }
    public function setCartItems(array $cart_items): static { $this->cart_items = $cart_items; return $this; }
    public function getCartTotal(): string { return $this->cart_total; }
    public function setCartTotal(string $cart_total): static { $this->cart_total = $cart_total; return $this; }
    public function getLastActivityAt(): ?\DateTimeImmutable { return $this->last_activity_at; }
    public function setLastActivityAt(\DateTimeImmutable $last_activity_at): static { $this->last_activity_at = $last_activity_at; return $this; }
    public function isIsRecovered(): bool { return $this->is_recovered; }
    public function setIsRecovered(bool $is_recovered): static { $this->is_recovered = $is_recovered; return $this; }
    public function isIsNotified(): bool { return $this->is_notified; }
    public function setIsNotified(bool $is_notified): static { $this->is_notified = $is_notified; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
}
