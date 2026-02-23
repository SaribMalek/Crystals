<?php

namespace App\Entity;

use App\Repository\FaqItemRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FaqItemRepository::class)]
#[ORM\Table(name: 'faq_items')]
class FaqItem
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 220)]
    private string $question = '';

    #[ORM\Column(type: Types::TEXT)]
    private string $answer = '';

    #[ORM\Column(options: ['default' => 0])]
    private int $sort_order = 0;

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public function getId(): ?int { return $this->id; }
    public function getQuestion(): string { return $this->question; }
    public function setQuestion(string $question): static { $this->question = trim($question); return $this; }
    public function getAnswer(): string { return $this->answer; }
    public function setAnswer(string $answer): static { $this->answer = $answer; return $this; }
    public function getSortOrder(): int { return $this->sort_order; }
    public function setSortOrder(int $sort_order): static { $this->sort_order = $sort_order; return $this; }
    public function isIsActive(): bool { return $this->is_active; }
    public function setIsActive(bool $is_active): static { $this->is_active = $is_active; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
}
