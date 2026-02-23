<?php

namespace App\Entity;

use App\Repository\PaymentSettingsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PaymentSettingsRepository::class)]
#[ORM\Table(name: 'payment_settings')]
#[ORM\HasLifecycleCallbacks]
class PaymentSettings
{
    public const MODE_TEST = 'test';
    public const MODE_LIVE = 'live';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(options: ['default' => true])]
    private bool $gateway_stripe_enabled = true;

    #[ORM\Column(options: ['default' => false])]
    private bool $gateway_razorpay_enabled = false;

    #[ORM\Column(options: ['default' => false])]
    private bool $gateway_paypal_enabled = false;

    #[ORM\Column(options: ['default' => true])]
    private bool $method_card_enabled = true;

    #[ORM\Column(options: ['default' => false])]
    private bool $method_upi_enabled = false;

    #[ORM\Column(options: ['default' => false])]
    private bool $method_net_banking_enabled = false;

    #[ORM\Column(options: ['default' => false])]
    private bool $method_wallet_enabled = false;

    #[ORM\Column(length: 10, options: ['default' => self::MODE_TEST])]
    private string $mode = self::MODE_TEST;

    #[ORM\Column(options: ['default' => false])]
    private bool $refunds_enabled = false;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, options: ['default' => '0.00'])]
    private string $max_auto_refund_amount = '0.00';

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $refund_policy_note = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    public function __construct()
    {
        $this->updated_at = new \DateTimeImmutable();
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function touch(): void
    {
        $this->updated_at = new \DateTimeImmutable();
    }

    public static function modeChoices(): array
    {
        return [
            'Test' => self::MODE_TEST,
            'Live' => self::MODE_LIVE,
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isGatewayStripeEnabled(): bool
    {
        return $this->gateway_stripe_enabled;
    }

    public function setGatewayStripeEnabled(bool $gateway_stripe_enabled): static
    {
        $this->gateway_stripe_enabled = $gateway_stripe_enabled;

        return $this;
    }

    public function isGatewayRazorpayEnabled(): bool
    {
        return $this->gateway_razorpay_enabled;
    }

    public function setGatewayRazorpayEnabled(bool $gateway_razorpay_enabled): static
    {
        $this->gateway_razorpay_enabled = $gateway_razorpay_enabled;

        return $this;
    }

    public function isGatewayPaypalEnabled(): bool
    {
        return $this->gateway_paypal_enabled;
    }

    public function setGatewayPaypalEnabled(bool $gateway_paypal_enabled): static
    {
        $this->gateway_paypal_enabled = $gateway_paypal_enabled;

        return $this;
    }

    public function isMethodCardEnabled(): bool
    {
        return $this->method_card_enabled;
    }

    public function setMethodCardEnabled(bool $method_card_enabled): static
    {
        $this->method_card_enabled = $method_card_enabled;

        return $this;
    }

    public function isMethodUpiEnabled(): bool
    {
        return $this->method_upi_enabled;
    }

    public function setMethodUpiEnabled(bool $method_upi_enabled): static
    {
        $this->method_upi_enabled = $method_upi_enabled;

        return $this;
    }

    public function isMethodNetBankingEnabled(): bool
    {
        return $this->method_net_banking_enabled;
    }

    public function setMethodNetBankingEnabled(bool $method_net_banking_enabled): static
    {
        $this->method_net_banking_enabled = $method_net_banking_enabled;

        return $this;
    }

    public function isMethodWalletEnabled(): bool
    {
        return $this->method_wallet_enabled;
    }

    public function setMethodWalletEnabled(bool $method_wallet_enabled): static
    {
        $this->method_wallet_enabled = $method_wallet_enabled;

        return $this;
    }

    public function getMode(): string
    {
        return $this->mode;
    }

    public function setMode(string $mode): static
    {
        $this->mode = $mode;

        return $this;
    }

    public function isRefundsEnabled(): bool
    {
        return $this->refunds_enabled;
    }

    public function setRefundsEnabled(bool $refunds_enabled): static
    {
        $this->refunds_enabled = $refunds_enabled;

        return $this;
    }

    public function getMaxAutoRefundAmount(): string
    {
        return $this->max_auto_refund_amount;
    }

    public function setMaxAutoRefundAmount(string $max_auto_refund_amount): static
    {
        $this->max_auto_refund_amount = $max_auto_refund_amount;

        return $this;
    }

    public function getRefundPolicyNote(): ?string
    {
        return $this->refund_policy_note;
    }

    public function setRefundPolicyNote(?string $refund_policy_note): static
    {
        $this->refund_policy_note = $refund_policy_note;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }
}
