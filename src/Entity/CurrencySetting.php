<?php

namespace App\Entity;

use App\Repository\CurrencySettingRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CurrencySettingRepository::class)]
#[ORM\Table(name: 'currency_settings')]
class CurrencySetting
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10, unique: true)]
    private ?string $code = null;

    #[ORM\Column(length: 20)]
    private ?string $symbol = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 12, scale: 6, options: ['default' => '1.000000'])]
    private string $exchange_rate = '1.000000';

    #[ORM\Column(options: ['default' => false])]
    private bool $is_default = false;

    #[ORM\Column(options: ['default' => true])]
    private bool $is_active = true;

    public function __toString(): string
    {
        return (string) ($this->code ?? 'Currency');
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
        $this->code = strtoupper(trim($code));

        return $this;
    }

    public function getSymbol(): ?string
    {
        return $this->symbol;
    }

    public function setSymbol(string $symbol): static
    {
        $this->symbol = $symbol;

        return $this;
    }

    public function getExchangeRate(): string
    {
        return $this->exchange_rate;
    }

    public function setExchangeRate(string $exchange_rate): static
    {
        $this->exchange_rate = $exchange_rate;

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

