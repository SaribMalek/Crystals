<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'push_notifications')]
class PushNotification
{
    public const STATUS_DRAFT = 'draft';
    public const STATUS_SCHEDULED = 'scheduled';
    public const STATUS_SENT = 'sent';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 150)]
    private string $title = '';

    #[ORM\Column(type: Types::TEXT)]
    private string $message = '';

    #[ORM\Column(length: 20)]
    private string $status = self::STATUS_DRAFT;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $target_url = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $audience = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $scheduled_at = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $sent_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public static function statusChoices(): array
    {
        return ['Draft' => self::STATUS_DRAFT, 'Scheduled' => self::STATUS_SCHEDULED, 'Sent' => self::STATUS_SENT];
    }

    public function __toString(): string
    {
        return $this->title !== '' ? $this->title : 'Push Notification';
    }

    public function getId(): ?int { return $this->id; }
    public function getTitle(): string { return $this->title; }
    public function setTitle(string $title): static { $this->title = trim($title); return $this; }
    public function getMessage(): string { return $this->message; }
    public function setMessage(string $message): static { $this->message = $message; return $this; }
    public function getStatus(): string { return $this->status; }
    public function setStatus(string $status): static { $this->status = $status; return $this; }
    public function getTargetUrl(): ?string { return $this->target_url; }
    public function setTargetUrl(?string $target_url): static { $this->target_url = $target_url; return $this; }
    public function getAudience(): ?string { return $this->audience; }
    public function setAudience(?string $audience): static { $this->audience = $audience; return $this; }
    public function getScheduledAt(): ?\DateTimeImmutable { return $this->scheduled_at; }
    public function setScheduledAt(?\DateTimeImmutable $scheduled_at): static { $this->scheduled_at = $scheduled_at; return $this; }
    public function getSentAt(): ?\DateTimeImmutable { return $this->sent_at; }
    public function setSentAt(?\DateTimeImmutable $sent_at): static { $this->sent_at = $sent_at; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
}
