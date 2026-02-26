<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260226010000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create announcements table for storefront top banner messages';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE announcements (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(160) NOT NULL, message LONGTEXT NOT NULL, link_url VARCHAR(255) DEFAULT NULL, open_in_new_tab TINYINT(1) DEFAULT 0 NOT NULL, background_color VARCHAR(20) DEFAULT \'#0f4c81\' NOT NULL, text_color VARCHAR(20) DEFAULT \'#ffffff\' NOT NULL, sort_order INT DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, starts_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', ends_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE announcements');
    }
}
