<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260223090000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add admin login history and activity log tables';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE admin_login_history (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, ip_address VARCHAR(45) DEFAULT NULL, user_agent LONGTEXT DEFAULT NULL, logged_in_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_D71330AAA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE admin_activity_log (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, route_name VARCHAR(120) DEFAULT NULL, http_method VARCHAR(10) NOT NULL, path VARCHAR(255) NOT NULL, ip_address VARCHAR(45) DEFAULT NULL, user_agent LONGTEXT DEFAULT NULL, activity_type VARCHAR(160) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_5D43F31EA76ED395 (user_id), INDEX idx_admin_activity_created_at (created_at), INDEX idx_admin_activity_route (route_name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE admin_login_history ADD CONSTRAINT FK_D71330AAA76ED395 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE admin_activity_log ADD CONSTRAINT FK_5D43F31EA76ED395 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE admin_login_history DROP FOREIGN KEY FK_D71330AAA76ED395');
        $this->addSql('ALTER TABLE admin_activity_log DROP FOREIGN KEY FK_5D43F31EA76ED395');
        $this->addSql('DROP TABLE admin_login_history');
        $this->addSql('DROP TABLE admin_activity_log');
    }
}

