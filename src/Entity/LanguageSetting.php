<?php

namespace App\Entity;

use App\Repository\LanguageSettingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LanguageSettingRepository::class)]
#[ORM\Table(name: 'language_settings')]
class LanguageSetting
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10, unique: true)]
    private ?string $code = null;

    #[ORM\Column(length: 80)]
    private ?string $name = null;

    #[ORM\Column(options: ['default' => false])]
    private bool $is_default = false;

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    public function __toString(): string
    {
        return (string) ($this->name ?? 'Language');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = strtolower(trim($code));

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = trim($name);

        return $this;
    }

    public function isDefault(): bool
    {
        return $this->is_default;
    }

    public function setIsDefault(bool $is_default): static
    {
        $this->is_default = $is_default;

        return $this;
    }

    public function isActive(): bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): static
    {
        $this->is_active = $is_active;

        return $this;
    }
}

