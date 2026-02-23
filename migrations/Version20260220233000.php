<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260220233000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add shipping, coupon and tax management tables plus order/product tax fields';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE shipping_zones (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(120) NOT NULL, country VARCHAR(80) NOT NULL, state VARCHAR(80) DEFAULT NULL, city VARCHAR(80) DEFAULT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shipping_methods (id INT AUTO_INCREMENT NOT NULL, zone_id INT DEFAULT NULL, name VARCHAR(100) NOT NULL, type VARCHAR(30) NOT NULL, flat_rate NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, free_shipping_min_order NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, weight_based_rate NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, delivery_partner VARCHAR(80) DEFAULT NULL, estimated_delivery_time VARCHAR(100) DEFAULT NULL, cod_enabled TINYINT(1) DEFAULT 0 NOT NULL, cod_min_order NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, cod_max_order NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_CCD50F849F2C3FAB (zone_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE delivery_partners (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, tracking_url_template VARCHAR(255) DEFAULT NULL, support_contact VARCHAR(120) DEFAULT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shipment_tracking (id INT AUTO_INCREMENT NOT NULL, order_id INT DEFAULT NULL, delivery_partner VARCHAR(100) DEFAULT NULL, tracking_id VARCHAR(120) NOT NULL, status VARCHAR(40) DEFAULT \'created\' NOT NULL, estimated_delivery_time VARCHAR(100) DEFAULT NULL, shipped_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE coupons (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(60) NOT NULL, discount_type VARCHAR(20) NOT NULL, discount_value NUMERIC(10, 2) NOT NULL, expiry_date DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', minimum_cart_value NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, user_email VARCHAR(180) DEFAULT NULL, usage_limit INT DEFAULT NULL, usage_count INT DEFAULT 0 NOT NULL, auto_apply TINYINT(1) DEFAULT 0 NOT NULL, festival_sale_rule TINYINT(1) DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX uniq_coupon_code (code), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tax_rules (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(120) NOT NULL, tax_type VARCHAR(20) NOT NULL, country VARCHAR(80) NOT NULL, state VARCHAR(80) DEFAULT NULL, product_tax_class VARCHAR(80) DEFAULT \'standard\' NOT NULL, rate NUMERIC(5, 2) DEFAULT 0.00 NOT NULL, is_inclusive TINYINT(1) DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');

        $this->addSql('ALTER TABLE product ADD tax_class VARCHAR(40) DEFAULT \'standard\' NOT NULL');
        $this->addSql('ALTER TABLE `order` ADD shipping_amount NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, ADD discount_amount NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, ADD tax_amount NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, ADD coupon_code VARCHAR(80) DEFAULT NULL, ADD shipping_method VARCHAR(120) DEFAULT NULL, ADD tracking_id VARCHAR(120) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE `order` DROP shipping_amount, DROP discount_amount, DROP tax_amount, DROP coupon_code, DROP shipping_method, DROP tracking_id');
        $this->addSql('ALTER TABLE product DROP tax_class');
        $this->addSql('DROP TABLE tax_rules');
        $this->addSql('DROP TABLE coupons');
        $this->addSql('DROP TABLE shipment_tracking');
        $this->addSql('DROP TABLE delivery_partners');
        $this->addSql('DROP TABLE shipping_methods');
        $this->addSql('DROP TABLE shipping_zones');
    }
}
