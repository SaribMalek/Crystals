<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'email_campaigns')]
class EmailCampaign
{
    public const STATUS_DRAFT = 'draft';
    public const STATUS_SCHEDULED = 'scheduled';
    public const STATUS_SENT = 'sent';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 140)]
    private string $name = '';

    #[ORM\Column(length: 180)]
    private string $subject = '';

    #[ORM\Column(type: Types::TEXT)]
    private string $content = '';

    #[ORM\Column(length: 20)]
    private string $status = self::STATUS_DRAFT;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $audience = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $scheduled_at = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $sent_at = null;

    #[ORM\Column(options: ['default' => 0])]
    private int $total_recipients = 0;

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
        return $this->name !== '' ? $this->name : 'Email Campaign';
    }

    public function getId(): ?int { return $this->id; }
    public function getName(): string { return $this->name; }
    public function setName(string $name): static { $this->name = trim($name); return $this; }
    public function getSubject(): string { return $this->subject; }
    public function setSubject(string $subject): static { $this->subject = trim($subject); return $this; }
    public function getContent(): string { return $this->content; }
    public function setContent(string $content): static { $this->content = $content; return $this; }
    public function getStatus(): string { return $this->status; }
    public function setStatus(string $status): static { $this->status = $status; return $this; }
    public function getAudience(): ?string { return $this->audience; }
    public function setAudience(?string $audience): static { $this->audience = $audience; return $this; }
    public function getScheduledAt(): ?\DateTimeImmutable { return $this->scheduled_at; }
    public function setScheduledAt(?\DateTimeImmutable $scheduled_at): static { $this->scheduled_at = $scheduled_at; return $this; }
    public function getSentAt(): ?\DateTimeImmutable { return $this->sent_at; }
    public function setSentAt(?\DateTimeImmutable $sent_at): static { $this->sent_at = $sent_at; return $this; }
    public function getTotalRecipients(): int { return $this->total_recipients; }
    public function setTotalRecipients(int $total_recipients): static { $this->total_recipients = $total_recipients; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
}
