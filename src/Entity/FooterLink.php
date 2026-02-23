<?php

namespace App\Entity;

use App\Repository\FooterLinkRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FooterLinkRepository::class)]
#[ORM\Table(name: 'footer_links')]
class FooterLink
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 80)]
    private string $section = 'company';

    #[ORM\Column(length: 120)]
    private string $label = '';

    #[ORM\Column(length: 255)]
    private string $url = '';

    #[ORM\Column(options: ['default' => 0])]
    private int $sort_order = 0;

    #[ORM\Column(options: ['default' => false])]
    private bool $open_in_new_tab = false;

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public static function sectionChoices(): array
    {
        return [
            'Collections' => 'collections',
            'Company' => 'company',
            'Legal' => 'legal',
            'Support' => 'support',
            'Social' => 'social',
        ];
    }

    public function getId(): ?int { return $this->id; }
    public function getSection(): string { return $this->section; }
    public function setSection(string $section): static { $this->section = $section; return $this; }
    public function getLabel(): string { return $this->label; }
    public function setLabel(string $label): static { $this->label = trim($label); return $this; }
    public function getUrl(): string { return $this->url; }
    public function setUrl(string $url): static { $this->url = trim($url); return $this; }
    public function getSortOrder(): int { return $this->sort_order; }
    public function setSortOrder(int $sort_order): static { $this->sort_order = $sort_order; return $this; }
    public function isOpenInNewTab(): bool { return $this->open_in_new_tab; }
    public function setOpenInNewTab(bool $open_in_new_tab): static { $this->open_in_new_tab = $open_in_new_tab; return $this; }
    public function isIsActive(): bool { return $this->is_active; }
    public function setIsActive(bool $is_active): static { $this->is_active = $is_active; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
}
