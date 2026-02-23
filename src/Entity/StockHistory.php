<?php

namespace App\Entity;

use App\Repository\StockHistoryRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StockHistoryRepository::class)]
class StockHistory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Product $product = null;

    #[ORM\Column]
    private int $previous_stock = 0;

    #[ORM\Column]
    private int $new_stock = 0;

    #[ORM\Column]
    private int $change_amount = 0;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $note = null;

    #[ORM\Column(length: 180, nullable: true)]
    private ?string $changed_by = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $changed_at = null;

    public function __construct()
    {
        $this->changed_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): static
    {
        $this->product = $product;

        return $this;
    }

    public function getPreviousStock(): int
    {
        return $this->previous_stock;
    }

    public function setPreviousStock(int $previous_stock): static
    {
        $this->previous_stock = $previous_stock;

        return $this;
    }

    public function getNewStock(): int
    {
        return $this->new_stock;
    }

    public function setNewStock(int $new_stock): static
    {
        $this->new_stock = $new_stock;

        return $this;
    }

    public function getChangeAmount(): int
    {
        return $this->change_amount;
    }

    public function setChangeAmount(int $change_amount): static
    {
        $this->change_amount = $change_amount;

        return $this;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(?string $note): static
    {
        $this->note = $note;

        return $this;
    }

    public function getChangedBy(): ?string
    {
        return $this->changed_by;
    }

    public function setChangedBy(?string $changed_by): static
    {
        $this->changed_by = $changed_by;

        return $this;
    }

    public function getChangedAt(): ?\DateTimeImmutable
    {
        return $this->changed_at;
    }

    public function setChangedAt(\DateTimeImmutable $changed_at): static
    {
        $this->changed_at = $changed_at;

        return $this;
    }
}
