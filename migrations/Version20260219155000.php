<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260219155000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create header_menu table for admin-manageable header menu and submenu';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE header_menu (id INT AUTO_INCREMENT NOT NULL, parent_id INT DEFAULT NULL, label VARCHAR(120) NOT NULL, path VARCHAR(255) NOT NULL, sort_order INT NOT NULL, is_active TINYINT(1) NOT NULL, open_in_new_tab TINYINT(1) NOT NULL, INDEX IDX_54F4A6BB727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE header_menu ADD CONSTRAINT FK_54F4A6BB727ACA70 FOREIGN KEY (parent_id) REFERENCES header_menu (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE header_menu DROP FOREIGN KEY FK_54F4A6BB727ACA70');
        $this->addSql('DROP TABLE header_menu');
    }
}

