<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'newsletter_subscribers')]
#[ORM\UniqueConstraint(name: 'uniq_newsletter_email', columns: ['email'])]
class NewsletterSubscriber
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $email = '';

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column(length: 80, nullable: true)]
    private ?string $source = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $subscribed_at = null;

    public function __construct()
    {
        $this->subscribed_at = new \DateTimeImmutable();
    }

    public function __toString(): string
    {
        return $this->email;
    }

    public function getId(): ?int { return $this->id; }
    public function getEmail(): string { return $this->email; }
    public function setEmail(string $email): static { $this->email = strtolower(trim($email)); return $this; }
    public function isIsActive(): bool { return $this->is_active; }
    public function setIsActive(bool $is_active): static { $this->is_active = $is_active; return $this; }
    public function getSource(): ?string { return $this->source; }
    public function setSource(?string $source): static { $this->source = $source; return $this; }
    public function getSubscribedAt(): ?\DateTimeImmutable { return $this->subscribed_at; }
}
