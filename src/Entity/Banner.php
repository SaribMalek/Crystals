<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'banners')]
class Banner
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 140)]
    private string $title = '';

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $link_url = null;

    #[ORM\Column(options: ['default' => 0])]
    private int $sort_order = 0;

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $starts_at = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $ends_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public function __toString(): string
    {
        return $this->title !== '' ? $this->title : 'Banner';
    }

    public function getId(): ?int { return $this->id; }
    public function getTitle(): string { return $this->title; }
    public function setTitle(string $title): static { $this->title = trim($title); return $this; }
    public function getImage(): ?string { return $this->image; }
    public function setImage(?string $image): static { $this->image = $image; return $this; }
    public function getLinkUrl(): ?string { return $this->link_url; }
    public function setLinkUrl(?string $link_url): static { $this->link_url = $link_url; return $this; }
    public function getSortOrder(): int { return $this->sort_order; }
    public function setSortOrder(int $sort_order): static { $this->sort_order = $sort_order; return $this; }
    public function isIsActive(): bool { return $this->is_active; }
    public function setIsActive(bool $is_active): static { $this->is_active = $is_active; return $this; }
    public function getStartsAt(): ?\DateTimeImmutable { return $this->starts_at; }
    public function setStartsAt(?\DateTimeImmutable $starts_at): static { $this->starts_at = $starts_at; return $this; }
    public function getEndsAt(): ?\DateTimeImmutable { return $this->ends_at; }
    public function setEndsAt(?\DateTimeImmutable $ends_at): static { $this->ends_at = $ends_at; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
}
