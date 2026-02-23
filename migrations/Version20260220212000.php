<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260220212000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add payment settings, transaction history and failure log tables';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE IF NOT EXISTS payment_settings (id INT AUTO_INCREMENT NOT NULL, gateway_stripe_enabled TINYINT(1) DEFAULT 1 NOT NULL, gateway_razorpay_enabled TINYINT(1) DEFAULT 0 NOT NULL, gateway_paypal_enabled TINYINT(1) DEFAULT 0 NOT NULL, method_card_enabled TINYINT(1) DEFAULT 1 NOT NULL, method_upi_enabled TINYINT(1) DEFAULT 0 NOT NULL, method_net_banking_enabled TINYINT(1) DEFAULT 0 NOT NULL, method_wallet_enabled TINYINT(1) DEFAULT 0 NOT NULL, mode VARCHAR(10) DEFAULT \'test\' NOT NULL, refunds_enabled TINYINT(1) DEFAULT 0 NOT NULL, max_auto_refund_amount NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, refund_policy_note LONGTEXT DEFAULT NULL, updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE IF NOT EXISTS payment_transactions (id INT AUTO_INCREMENT NOT NULL, order_ref_id INT DEFAULT NULL, gateway VARCHAR(40) NOT NULL, method VARCHAR(40) NOT NULL, mode VARCHAR(40) NOT NULL, external_id VARCHAR(80) DEFAULT NULL, status VARCHAR(30) NOT NULL, amount NUMERIC(10, 2) NOT NULL, currency VARCHAR(10) DEFAULT \'usd\' NOT NULL, customer_email VARCHAR(180) DEFAULT NULL, note LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_65D197D620C13A5C (order_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE IF NOT EXISTS payment_failure_logs (id INT AUTO_INCREMENT NOT NULL, order_ref_id INT DEFAULT NULL, customer_email VARCHAR(180) DEFAULT NULL, gateway VARCHAR(40) DEFAULT NULL, method VARCHAR(40) DEFAULT NULL, error_code VARCHAR(150) DEFAULT NULL, error_message LONGTEXT NOT NULL, context_payload LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_E42D98D20C13A5C (order_ref_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('INSERT INTO payment_settings (gateway_stripe_enabled, gateway_razorpay_enabled, gateway_paypal_enabled, method_card_enabled, method_upi_enabled, method_net_banking_enabled, method_wallet_enabled, mode, refunds_enabled, max_auto_refund_amount, refund_policy_note, updated_at) SELECT 1, 0, 0, 1, 0, 0, 0, \'test\', 0, 0.00, NULL, NOW() WHERE NOT EXISTS (SELECT 1 FROM payment_settings)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE IF EXISTS payment_failure_logs');
        $this->addSql('DROP TABLE IF EXISTS payment_transactions');
        $this->addSql('DROP TABLE IF EXISTS payment_settings');
    }
}
