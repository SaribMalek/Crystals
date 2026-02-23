<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260221013000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add product reviews and ratings table with moderation fields';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE product_reviews (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, customer_name VARCHAR(140) DEFAULT NULL, customer_email VARCHAR(180) DEFAULT NULL, rating INT NOT NULL, title VARCHAR(200) DEFAULT NULL, review_text LONGTEXT NOT NULL, status VARCHAR(20) DEFAULT \'pending\' NOT NULL, admin_reply LONGTEXT DEFAULT NULL, moderation_note LONGTEXT DEFAULT NULL, is_spam TINYINT(1) DEFAULT 0 NOT NULL, moderated_by VARCHAR(180) DEFAULT NULL, moderated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_8A35F6D94584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE product_reviews');
    }
}
