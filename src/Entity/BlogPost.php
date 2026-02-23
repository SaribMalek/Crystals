<?php

namespace App\Entity;

use App\Repository\BlogPostRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BlogPostRepository::class)]
#[ORM\Table(name: 'blog_posts')]
#[ORM\UniqueConstraint(name: 'uniq_blog_slug', columns: ['slug'])]
class BlogPost
{
    public const STATUS_DRAFT = 'draft';
    public const STATUS_PUBLISHED = 'published';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $title = '';

    #[ORM\Column(length: 200)]
    private string $slug = '';

    #[ORM\Column(length: 140, nullable: true)]
    private ?string $excerpt = null;

    #[ORM\Column(type: Types::TEXT)]
    private string $content = '';

    #[ORM\Column(length: 20)]
    private string $status = self::STATUS_DRAFT;

    #[ORM\Column(length: 180, nullable: true)]
    private ?string $author = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $featured_image = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $published_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    public function __construct()
    {
        $now = new \DateTimeImmutable();
        $this->created_at = $now;
        $this->updated_at = $now;
    }

    public static function statusChoices(): array
    {
        return ['Draft' => self::STATUS_DRAFT, 'Published' => self::STATUS_PUBLISHED];
    }

    public function __toString(): string
    {
        return $this->title !== '' ? $this->title : 'Blog Post';
    }

    public function getId(): ?int { return $this->id; }
    public function getTitle(): string { return $this->title; }
    public function setTitle(string $title): static { $this->title = trim($title); return $this; }
    public function getSlug(): string { return $this->slug; }
    public function setSlug(string $slug): static { $this->slug = strtolower(trim($slug)); return $this; }
    public function getExcerpt(): ?string { return $this->excerpt; }
    public function setExcerpt(?string $excerpt): static { $this->excerpt = $excerpt; return $this; }
    public function getContent(): string { return $this->content; }
    public function setContent(string $content): static { $this->content = $content; return $this; }
    public function getStatus(): string { return $this->status; }
    public function setStatus(string $status): static { $this->status = $status; return $this; }
    public function getAuthor(): ?string { return $this->author; }
    public function setAuthor(?string $author): static { $this->author = $author; return $this; }
    public function getFeaturedImage(): ?string { return $this->featured_image; }
    public function setFeaturedImage(?string $featured_image): static { $this->featured_image = $featured_image; return $this; }
    public function getPublishedAt(): ?\DateTimeImmutable { return $this->published_at; }
    public function setPublishedAt(?\DateTimeImmutable $published_at): static { $this->published_at = $published_at; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
    public function getUpdatedAt(): ?\DateTimeImmutable { return $this->updated_at; }
    public function setUpdatedAt(\DateTimeImmutable $updated_at): static { $this->updated_at = $updated_at; return $this; }
}
