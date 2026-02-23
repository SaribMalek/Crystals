<?php

namespace App\Entity;

use App\Repository\StaticPageRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StaticPageRepository::class)]
#[ORM\Table(name: 'static_pages')]
#[ORM\UniqueConstraint(name: 'uniq_static_page_slug', columns: ['slug'])]
class StaticPage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 140)]
    private string $title = '';

    #[ORM\Column(length: 160)]
    private string $slug = '';

    #[ORM\Column(length: 40)]
    private string $page_type = 'custom';

    #[ORM\Column(type: Types::TEXT)]
    private string $content = '';

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $now = new \DateTimeImmutable();
        $this->created_at = $now;
        $this->updated_at = $now;
    }

    public static function pageTypeChoices(): array
    {
        return [
            'About' => 'about',
            'Contact' => 'contact',
            'Policy' => 'policy',
            'Terms & Conditions' => 'terms',
            'Privacy Policy' => 'privacy',
            'Custom' => 'custom',
        ];
    }

    public function __toString(): string
    {
        return $this->title !== '' ? $this->title : 'Static Page';
    }

    public function getId(): ?int { return $this->id; }
    public function getTitle(): string { return $this->title; }
    public function setTitle(string $title): static { $this->title = trim($title); return $this; }
    public function getSlug(): string { return $this->slug; }
    public function setSlug(string $slug): static { $this->slug = strtolower(trim($slug)); return $this; }
    public function getPageType(): string { return $this->page_type; }
    public function setPageType(string $page_type): static { $this->page_type = $page_type; return $this; }
    public function getContent(): string { return $this->content; }
    public function setContent(string $content): static { $this->content = $content; return $this; }
    public function isIsActive(): bool { return $this->is_active; }
    public function setIsActive(bool $is_active): static { $this->is_active = $is_active; return $this; }
    public function getUpdatedAt(): ?\DateTimeImmutable { return $this->updated_at; }
    public function setUpdatedAt(\DateTimeImmutable $updated_at): static { $this->updated_at = $updated_at; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
}
