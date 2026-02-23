<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260221001000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add marketing tables: banners, campaigns, push notifications, abandoned carts, newsletter and referral program';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE banners (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(140) NOT NULL, image VARCHAR(255) DEFAULT NULL, link_url VARCHAR(255) DEFAULT NULL, sort_order INT DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, starts_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', ends_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE email_campaigns (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(140) NOT NULL, subject VARCHAR(180) NOT NULL, content LONGTEXT NOT NULL, status VARCHAR(20) NOT NULL, audience VARCHAR(60) DEFAULT NULL, scheduled_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', sent_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', total_recipients INT DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE push_notifications (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(150) NOT NULL, message LONGTEXT NOT NULL, status VARCHAR(20) NOT NULL, target_url VARCHAR(255) DEFAULT NULL, audience VARCHAR(60) DEFAULT NULL, scheduled_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', sent_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE abandoned_carts (id INT AUTO_INCREMENT NOT NULL, customer_email VARCHAR(180) NOT NULL, cart_items JSON NOT NULL, cart_total NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, last_activity_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', is_recovered TINYINT(1) DEFAULT 0 NOT NULL, is_notified TINYINT(1) DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE newsletter_subscribers (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, source VARCHAR(80) DEFAULT NULL, subscribed_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX uniq_newsletter_email (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE referral_programs (id INT AUTO_INCREMENT NOT NULL, referrer_email VARCHAR(180) NOT NULL, referred_email VARCHAR(180) DEFAULT NULL, referral_code VARCHAR(60) NOT NULL, reward_amount NUMERIC(10, 2) DEFAULT 0.00 NOT NULL, status VARCHAR(20) DEFAULT \'pending\' NOT NULL, payout_done TINYINT(1) DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE referral_programs');
        $this->addSql('DROP TABLE newsletter_subscribers');
        $this->addSql('DROP TABLE abandoned_carts');
        $this->addSql('DROP TABLE push_notifications');
        $this->addSql('DROP TABLE email_campaigns');
        $this->addSql('DROP TABLE banners');
    }
}
