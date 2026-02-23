<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrderRepository::class)]
#[ORM\Table(name: '`order`')]
class Order
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_PAID = 'paid';
    public const STATUS_PROCESSING = 'processing';
    public const STATUS_SHIPPED = 'shipped';
    public const STATUS_DELIVERED = 'delivered';
    public const STATUS_CANCELLED = 'cancelled';
    public const STATUS_REFUNDED = 'refunded';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $customer_email = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    private ?string $total_amount = null;

    #[ORM\Column(length: 50)]
    private ?string $status = 'pending';

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $shipping_address = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $payment_method = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $internal_note = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private ?string $refunded_amount = '0.00';

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private ?string $shipping_amount = '0.00';

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private ?string $discount_amount = '0.00';

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private ?string $tax_amount = '0.00';

    #[ORM\Column(length: 80, nullable: true)]
    private ?string $coupon_code = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $shipping_method = null;

    #[ORM\Column(length: 120, nullable: true)]
    private ?string $tracking_id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\OneToMany(mappedBy: 'order_ref', targetEntity: OrderItem::class, cascade: ['persist', 'remove'])]
    private Collection $orderItems;

    public function __construct()
    {
        $this->orderItems = new ArrayCollection();
        $this->created_at = new \DateTimeImmutable();
        $this->status = self::STATUS_PENDING;
    }

    public static function statusChoices(): array
    {
        return [
            'Pending' => self::STATUS_PENDING,
            'Paid' => self::STATUS_PAID,
            'Processing' => self::STATUS_PROCESSING,
            'Shipped' => self::STATUS_SHIPPED,
            'Delivered' => self::STATUS_DELIVERED,
            'Cancelled' => self::STATUS_CANCELLED,
            'Refunded' => self::STATUS_REFUNDED,
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomerEmail(): ?string
    {
        return $this->customer_email;
    }

    public function setCustomerEmail(string $customer_email): static
    {
        $this->customer_email = $customer_email;

        return $this;
    }

    public function getTotalAmount(): ?string
    {
        return $this->total_amount;
    }

    public function setTotalAmount(string $total_amount): static
    {
        $this->total_amount = $total_amount;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

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

    public function getShippingAddress(): ?string
    {
        return $this->shipping_address;
    }

    public function setShippingAddress(?string $shipping_address): static
    {
        $this->shipping_address = $shipping_address;

        return $this;
    }

    public function getPaymentMethod(): ?string
    {
        return $this->payment_method;
    }

    public function setPaymentMethod(?string $payment_method): static
    {
        $this->payment_method = $payment_method;

        return $this;
    }

    public function getInternalNote(): ?string
    {
        return $this->internal_note;
    }

    public function setInternalNote(?string $internal_note): static
    {
        $this->internal_note = $internal_note;

        return $this;
    }

    public function getRefundedAmount(): ?string
    {
        return $this->refunded_amount;
    }

    public function setRefundedAmount(string $refunded_amount): static
    {
        $this->refunded_amount = $refunded_amount;

        return $this;
    }

    public function getShippingAmount(): ?string
    {
        return $this->shipping_amount;
    }

    public function setShippingAmount(string $shipping_amount): static
    {
        $this->shipping_amount = $shipping_amount;

        return $this;
    }

    public function getDiscountAmount(): ?string
    {
        return $this->discount_amount;
    }

    public function setDiscountAmount(string $discount_amount): static
    {
        $this->discount_amount = $discount_amount;

        return $this;
    }

    public function getTaxAmount(): ?string
    {
        return $this->tax_amount;
    }

    public function setTaxAmount(string $tax_amount): static
    {
        $this->tax_amount = $tax_amount;

        return $this;
    }

    public function getCouponCode(): ?string
    {
        return $this->coupon_code;
    }

    public function setCouponCode(?string $coupon_code): static
    {
        $this->coupon_code = $coupon_code;

        return $this;
    }

    public function getShippingMethod(): ?string
    {
        return $this->shipping_method;
    }

    public function setShippingMethod(?string $shipping_method): static
    {
        $this->shipping_method = $shipping_method;

        return $this;
    }

    public function getTrackingId(): ?string
    {
        return $this->tracking_id;
    }

    public function setTrackingId(?string $tracking_id): static
    {
        $this->tracking_id = $tracking_id;

        return $this;
    }

    /**
     * @return Collection<int, OrderItem>
     */
    public function getOrderItems(): Collection
    {
        return $this->orderItems;
    }

    public function addOrderItem(OrderItem $orderItem): static
    {
        if (!$this->orderItems->contains($orderItem)) {
            $this->orderItems->add($orderItem);
            $orderItem->setOrderRef($this);
        }

        return $this;
    }

    public function removeOrderItem(OrderItem $orderItem): static
    {
        if ($this->orderItems->removeElement($orderItem)) {
            // set the owning side to null (unless already changed)
            if ($orderItem->getOrderRef() === $this) {
                $orderItem->setOrderRef(null);
            }
        }

        return $this;
    }
}
