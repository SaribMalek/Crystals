<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260223100000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add API keys, webhook logs and user 2FA flag';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE api_keys (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(120) NOT NULL, key_value VARCHAR(80) NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, last_used_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_DF013D44395CFA34 (key_value), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE webhook_logs (id INT AUTO_INCREMENT NOT NULL, provider VARCHAR(60) NOT NULL, event_type VARCHAR(120) DEFAULT NULL, status_code INT DEFAULT NULL, payload LONGTEXT DEFAULT NULL, response_message LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX idx_webhook_created_at (created_at), INDEX idx_webhook_provider (provider), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE users ADD two_factor_enabled TINYINT(1) DEFAULT 0 NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users DROP two_factor_enabled');
        $this->addSql('DROP TABLE webhook_logs');
        $this->addSql('DROP TABLE api_keys');
    }
}

