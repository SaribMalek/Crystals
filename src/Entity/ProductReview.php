<?php

namespace App\Entity;

use App\Repository\ProductReviewRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductReviewRepository::class)]
#[ORM\Table(name: 'product_reviews')]
#[ORM\HasLifecycleCallbacks]
class ProductReview
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_APPROVED = 'approved';
    public const STATUS_REJECTED = 'rejected';
    public const STATUS_SPAM = 'spam';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Product $product = null;

    #[ORM\Column(length: 140, nullable: true)]
    private ?string $customer_name = null;

    #[ORM\Column(length: 180, nullable: true)]
    private ?string $customer_email = null;

    #[ORM\Column]
    private int $rating = 5;

    #[ORM\Column(length: 200, nullable: true)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    private string $review_text = '';

    #[ORM\Column(length: 20, options: ['default' => self::STATUS_PENDING])]
    private string $status = self::STATUS_PENDING;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $admin_reply = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $moderation_note = null;

    #[ORM\Column(options: ['default' => false])]
    private bool $is_spam = false;

    #[ORM\Column(length: 180, nullable: true)]
    private ?string $moderated_by = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $moderated_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    public function __construct()
    {
        $now = new \DateTimeImmutable();
        $this->created_at = $now;
        $this->updated_at = $now;
        $this->status = self::STATUS_PENDING;
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function touch(): void
    {
        $this->updated_at = new \DateTimeImmutable();
    }

    public static function statusChoices(): array
    {
        return [
            'Pending' => self::STATUS_PENDING,
            'Approved' => self::STATUS_APPROVED,
            'Rejected' => self::STATUS_REJECTED,
            'Spam' => self::STATUS_SPAM,
        ];
    }

    public function getId(): ?int { return $this->id; }
    public function getProduct(): ?Product { return $this->product; }
    public function setProduct(?Product $product): static { $this->product = $product; return $this; }
    public function getCustomerName(): ?string { return $this->customer_name; }
    public function setCustomerName(?string $customer_name): static { $this->customer_name = $customer_name; return $this; }
    public function getCustomerEmail(): ?string { return $this->customer_email; }
    public function setCustomerEmail(?string $customer_email): static { $this->customer_email = $customer_email !== null ? strtolower(trim($customer_email)) : null; return $this; }
    public function getRating(): int { return $this->rating; }
    public function setRating(int $rating): static { $this->rating = max(1, min(5, $rating)); return $this; }
    public function getTitle(): ?string { return $this->title; }
    public function setTitle(?string $title): static { $this->title = $title; return $this; }
    public function getReviewText(): string { return $this->review_text; }
    public function setReviewText(string $review_text): static { $this->review_text = $review_text; return $this; }
    public function getStatus(): string { return $this->status; }
    public function setStatus(string $status): static { $this->status = $status; return $this; }
    public function getAdminReply(): ?string { return $this->admin_reply; }
    public function setAdminReply(?string $admin_reply): static { $this->admin_reply = $admin_reply; return $this; }
    public function getModerationNote(): ?string { return $this->moderation_note; }
    public function setModerationNote(?string $moderation_note): static { $this->moderation_note = $moderation_note; return $this; }
    public function isIsSpam(): bool { return $this->is_spam; }
    public function setIsSpam(bool $is_spam): static { $this->is_spam = $is_spam; return $this; }
    public function getModeratedBy(): ?string { return $this->moderated_by; }
    public function setModeratedBy(?string $moderated_by): static { $this->moderated_by = $moderated_by; return $this; }
    public function getModeratedAt(): ?\DateTimeImmutable { return $this->moderated_at; }
    public function setModeratedAt(?\DateTimeImmutable $moderated_at): static { $this->moderated_at = $moderated_at; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
    public function getUpdatedAt(): ?\DateTimeImmutable { return $this->updated_at; }
}
