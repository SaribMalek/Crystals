<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260220200500 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create customers table for admin customer management and GDPR tools';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE customers (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, full_name VARCHAR(120) DEFAULT NULL, phone VARCHAR(30) DEFAULT NULL, billing_address LONGTEXT DEFAULT NULL, shipping_address LONGTEXT DEFAULT NULL, account_status VARCHAR(20) DEFAULT \'active\' NOT NULL, customer_group VARCHAR(20) DEFAULT \'retail\' NOT NULL, password_hash VARCHAR(255) DEFAULT NULL, profile_image VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX uniq_customers_email (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE customers');
    }
}
