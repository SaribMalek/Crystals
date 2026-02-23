<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'referral_programs')]
class ReferralProgram
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_APPROVED = 'approved';
    public const STATUS_REJECTED = 'rejected';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $referrer_email = '';

    #[ORM\Column(length: 180, nullable: true)]
    private ?string $referred_email = null;

    #[ORM\Column(length: 60)]
    private string $referral_code = '';

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $reward_amount = '0.00';

    #[ORM\Column(length: 20, options: ['default' => self::STATUS_PENDING])]
    private string $status = self::STATUS_PENDING;

    #[ORM\Column(options: ['default' => false])]
    private bool $payout_done = false;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public static function statusChoices(): array
    {
        return ['Pending' => self::STATUS_PENDING, 'Approved' => self::STATUS_APPROVED, 'Rejected' => self::STATUS_REJECTED];
    }

    public function getId(): ?int { return $this->id; }
    public function getReferrerEmail(): string { return $this->referrer_email; }
    public function setReferrerEmail(string $referrer_email): static { $this->referrer_email = strtolower(trim($referrer_email)); return $this; }
    public function getReferredEmail(): ?string { return $this->referred_email; }
    public function setReferredEmail(?string $referred_email): static { $this->referred_email = $referred_email !== null ? strtolower(trim($referred_email)) : null; return $this; }
    public function getReferralCode(): string { return $this->referral_code; }
    public function setReferralCode(string $referral_code): static { $this->referral_code = strtoupper(trim($referral_code)); return $this; }
    public function getRewardAmount(): string { return $this->reward_amount; }
    public function setRewardAmount(string $reward_amount): static { $this->reward_amount = $reward_amount; return $this; }
    public function getStatus(): string { return $this->status; }
    public function setStatus(string $status): static { $this->status = $status; return $this; }
    public function isPayoutDone(): bool { return $this->payout_done; }
    public function setPayoutDone(bool $payout_done): static { $this->payout_done = $payout_done; return $this; }
    public function getCreatedAt(): ?\DateTimeImmutable { return $this->created_at; }
}
