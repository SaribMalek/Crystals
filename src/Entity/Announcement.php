<?php

namespace App\Entity;

use App\Repository\AnnouncementRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AnnouncementRepository::class)]
#[ORM\Table(name: 'announcements')]
class Announcement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 160)]
    private ?string $title = null;

    #[ORM\Column(type: 'text')]
    private ?string $message = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $link_url = null;

    #[ORM\Column]
    private bool $open_in_new_tab = false;

    #[ORM\Column(length: 20)]
    private string $background_color = '#0f4c81';

    #[ORM\Column(length: 20)]
    private string $text_color = '#ffffff';

    #[ORM\Column]
    private int $sort_order = 0;

    #[ORM\Column]
    private bool $is_active = true;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $starts_at = null;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $ends_at = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private \DateTimeImmutable $created_at;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public function __toString(): string
    {
        return (string) ($this->title ?? 'Announcement');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getLinkUrl(): ?string
    {
        return $this->link_url;
    }

    public function setLinkUrl(?string $link_url): static
    {
        $this->link_url = $link_url;

        return $this;
    }

    public function isOpenInNewTab(): bool
    {
        return $this->open_in_new_tab;
    }

    public function setOpenInNewTab(bool $open_in_new_tab): static
    {
        $this->open_in_new_tab = $open_in_new_tab;

        return $this;
    }

    public function getBackgroundColor(): string
    {
        return $this->background_color;
    }

    public function setBackgroundColor(string $background_color): static
    {
        $this->background_color = $background_color;

        return $this;
    }

    public function getTextColor(): string
    {
        return $this->text_color;
    }

    public function setTextColor(string $text_color): static
    {
        $this->text_color = $text_color;

        return $this;
    }

    public function getSortOrder(): int
    {
        return $this->sort_order;
    }

    public function setSortOrder(int $sort_order): static
    {
        $this->sort_order = $sort_order;

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

    public function getStartsAt(): ?\DateTimeImmutable
    {
        return $this->starts_at;
    }

    public function setStartsAt(?\DateTimeImmutable $starts_at): static
    {
        $this->starts_at = $starts_at;

        return $this;
    }

    public function getEndsAt(): ?\DateTimeImmutable
    {
        return $this->ends_at;
    }

    public function setEndsAt(?\DateTimeImmutable $ends_at): static
    {
        $this->ends_at = $ends_at;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->created_at;
    }
}
