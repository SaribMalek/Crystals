<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260223093000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add site settings table with branding, locale, maintenance and message templates';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE site_settings (id INT AUTO_INCREMENT NOT NULL, site_name VARCHAR(180) NOT NULL, site_logo VARCHAR(255) DEFAULT NULL, favicon VARCHAR(255) DEFAULT NULL, currency VARCHAR(10) DEFAULT \'USD\' NOT NULL, timezone VARCHAR(80) DEFAULT \'UTC\' NOT NULL, language VARCHAR(10) DEFAULT \'en\' NOT NULL, maintenance_mode TINYINT(1) DEFAULT 0 NOT NULL, email_template_order LONGTEXT DEFAULT NULL, email_template_support LONGTEXT DEFAULT NULL, sms_template_order LONGTEXT DEFAULT NULL, sms_template_otp LONGTEXT DEFAULT NULL, updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('INSERT INTO site_settings (site_name, site_logo, favicon, currency, timezone, language, maintenance_mode, email_template_order, email_template_support, sms_template_order, sms_template_otp, updated_at) VALUES (\'AS Crystals\', NULL, NULL, \'USD\', \'UTC\', \'en\', 0, \'Subject: Your order {{order_id}} is confirmed\\n\\nHello {{customer_name}},\\nYour order has been placed successfully.\', \'Subject: We received your request\\n\\nHello {{customer_name}},\\nOur support team will contact you soon.\', \'Order {{order_id}} confirmed. Track: {{tracking_url}}\', \'Your OTP is {{otp}}. Valid for 10 minutes.\', NOW())');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE site_settings');
    }
}

