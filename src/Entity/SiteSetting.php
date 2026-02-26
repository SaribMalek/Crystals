<?php

namespace App\Entity;

use App\Repository\SiteSettingRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SiteSettingRepository::class)]
#[ORM\Table(name: 'site_settings')]
#[ORM\HasLifecycleCallbacks]
class SiteSetting
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $site_name = 'AS Crystals';

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $site_logo = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $favicon = null;

    #[ORM\Column(length: 10, options: ['default' => 'USD'])]
    private string $currency = 'USD';

    #[ORM\Column(length: 80, options: ['default' => 'UTC'])]
    private string $timezone = 'UTC';

    #[ORM\Column(length: 10, options: ['default' => 'en'])]
    private string $language = 'en';

    #[ORM\Column(options: ['default' => false])]
    private bool $maintenance_mode = false;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $email_template_order = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $email_template_support = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $sms_template_order = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $sms_template_otp = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    public function __construct()
    {
        $this->updated_at = new \DateTimeImmutable();
        $this->email_template_order = "Subject: Your order {{order_id}} is confirmed\n\nHello {{customer_name}},\nYour order has been placed successfully.";
        $this->email_template_support = "Subject: We received your request\n\nHello {{customer_name}},\nOur support team will contact you soon.";
        $this->sms_template_order = 'Order {{order_id}} confirmed. Track: {{tracking_url}}';
        $this->sms_template_otp = 'Your OTP is {{otp}}. Valid for 10 minutes.';
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function touch(): void
    {
        $this->updated_at = new \DateTimeImmutable();
    }

    public static function currencyChoices(): array
    {
        return [
            'USD ($)' => 'USD',
            'EUR (EUR)' => 'EUR',
            'GBP (GBP)' => 'GBP',
            'INR (INR)' => 'INR',
        ];
    }

    public static function languageChoices(): array
    {
        return [
            'English' => 'en',
            'Spanish' => 'es',
            'French' => 'fr',
            'Hindi' => 'hi',
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSiteName(): string
    {
        return $this->site_name;
    }

    public function setSiteName(string $site_name): static
    {
        $this->site_name = trim($site_name);

        return $this;
    }

    public function getSiteLogo(): ?string
    {
        return $this->site_logo;
    }

    public function setSiteLogo(?string $site_logo): static
    {
        $this->site_logo = $site_logo;

        return $this;
    }

    public function getFavicon(): ?string
    {
        return $this->favicon;
    }

    public function setFavicon(?string $favicon): static
    {
        $this->favicon = $favicon;

        return $this;
    }

    public function getCurrency(): string
    {
        return $this->currency;
    }

    public function setCurrency(string $currency): static
    {
        $this->currency = strtoupper(trim($currency));

        return $this;
    }

    public function getTimezone(): string
    {
        return $this->timezone;
    }

    public function setTimezone(string $timezone): static
    {
        $this->timezone = trim($timezone);

        return $this;
    }

    public function getLanguage(): string
    {
        return $this->language;
    }

    public function setLanguage(string $language): static
    {
        $this->language = trim($language);

        return $this;
    }

    public function isMaintenanceMode(): bool
    {
        return $this->maintenance_mode;
    }

    public function setMaintenanceMode(bool $maintenance_mode): static
    {
        $this->maintenance_mode = $maintenance_mode;

        return $this;
    }

    public function getEmailTemplateOrder(): ?string
    {
        return $this->email_template_order;
    }

    public function setEmailTemplateOrder(?string $email_template_order): static
    {
        $this->email_template_order = $email_template_order;

        return $this;
    }

    public function getEmailTemplateSupport(): ?string
    {
        return $this->email_template_support;
    }

    public function setEmailTemplateSupport(?string $email_template_support): static
    {
        $this->email_template_support = $email_template_support;

        return $this;
    }

    public function getSmsTemplateOrder(): ?string
    {
        return $this->sms_template_order;
    }

    public function setSmsTemplateOrder(?string $sms_template_order): static
    {
        $this->sms_template_order = $sms_template_order;

        return $this;
    }

    public function getSmsTemplateOtp(): ?string
    {
        return $this->sms_template_otp;
    }

    public function setSmsTemplateOtp(?string $sms_template_otp): static
    {
        $this->sms_template_otp = $sms_template_otp;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }
}

