<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260223103000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add advanced feature tables and product fields for vendor/subscription/digital/license';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE vendors (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(140) NOT NULL, email VARCHAR(180) DEFAULT NULL, phone VARCHAR(40) DEFAULT NULL, company_name VARCHAR(160) DEFAULT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE affiliate_partners (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(140) NOT NULL, email VARCHAR(180) NOT NULL, affiliate_code VARCHAR(80) NOT NULL, commission_rate NUMERIC(5, 2) DEFAULT \'5.00\' NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_D6A7CA9CE7927C74 (email), UNIQUE INDEX UNIQ_D6A7CA9CBE06276A (affiliate_code), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE currency_settings (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(10) NOT NULL, symbol VARCHAR(20) NOT NULL, exchange_rate NUMERIC(12, 6) DEFAULT \'1.000000\' NOT NULL, is_default TINYINT(1) DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, UNIQUE INDEX UNIQ_5D5ACFA077153098 (code), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE language_settings (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(10) NOT NULL, name VARCHAR(80) NOT NULL, is_default TINYINT(1) DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, UNIQUE INDEX UNIQ_C53C08A377153098 (code), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pos_integration_settings (id INT AUTO_INCREMENT NOT NULL, is_enabled TINYINT(1) DEFAULT 0 NOT NULL, provider VARCHAR(80) DEFAULT NULL, api_url VARCHAR(255) DEFAULT NULL, api_key VARCHAR(255) DEFAULT NULL, location_id VARCHAR(120) DEFAULT NULL, updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE license_keys (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, license_key VARCHAR(180) NOT NULL, status VARCHAR(20) DEFAULT \'available\' NOT NULL, assigned_to_email VARCHAR(180) DEFAULT NULL, assigned_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_62B6D0A2395CFA34 (license_key), INDEX IDX_62B6D0A44584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');

        $this->addSql('ALTER TABLE product ADD vendor_id INT DEFAULT NULL, ADD is_subscription TINYINT(1) DEFAULT 0 NOT NULL, ADD subscription_interval VARCHAR(20) DEFAULT NULL, ADD subscription_price NUMERIC(10, 2) DEFAULT NULL, ADD is_digital TINYINT(1) DEFAULT 0 NOT NULL, ADD digital_download_url VARCHAR(255) DEFAULT NULL, ADD license_key_required TINYINT(1) DEFAULT 0 NOT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADDFFD1D17 FOREIGN KEY (vendor_id) REFERENCES vendors (id) ON DELETE SET NULL');
        $this->addSql('CREATE INDEX IDX_D34A04ADDFFD1D17 ON product (vendor_id)');

        $this->addSql('ALTER TABLE license_keys ADD CONSTRAINT FK_62B6D0A44584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');

        $this->addSql('INSERT INTO currency_settings (code, symbol, exchange_rate, is_default, is_active) VALUES (\'USD\', \'$\', 1.000000, 1, 1)');
        $this->addSql('INSERT INTO language_settings (code, name, is_default, is_active) VALUES (\'en\', \'English\', 1, 1)');
        $this->addSql('INSERT INTO pos_integration_settings (is_enabled, provider, api_url, api_key, location_id, updated_at) VALUES (0, NULL, NULL, NULL, NULL, NOW())');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE license_keys DROP FOREIGN KEY FK_62B6D0A44584665A');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADDFFD1D17');
        $this->addSql('DROP TABLE vendors');
        $this->addSql('DROP TABLE affiliate_partners');
        $this->addSql('DROP TABLE currency_settings');
        $this->addSql('DROP TABLE language_settings');
        $this->addSql('DROP TABLE pos_integration_settings');
        $this->addSql('DROP TABLE license_keys');
        $this->addSql('DROP INDEX IDX_D34A04ADDFFD1D17 ON product');
        $this->addSql('ALTER TABLE product DROP vendor_id, DROP is_subscription, DROP subscription_interval, DROP subscription_price, DROP is_digital, DROP digital_download_url, DROP license_key_required');
    }
}

