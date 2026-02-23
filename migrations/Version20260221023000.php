<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260221023000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add CMS tables: static pages, FAQ, blog posts and footer links';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE static_pages (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(140) NOT NULL, slug VARCHAR(160) NOT NULL, page_type VARCHAR(40) NOT NULL, content LONGTEXT NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX uniq_static_page_slug (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE faq_items (id INT AUTO_INCREMENT NOT NULL, question VARCHAR(220) NOT NULL, answer LONGTEXT NOT NULL, sort_order INT DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE blog_posts (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(180) NOT NULL, slug VARCHAR(200) NOT NULL, excerpt VARCHAR(140) DEFAULT NULL, content LONGTEXT NOT NULL, status VARCHAR(20) NOT NULL, author VARCHAR(180) DEFAULT NULL, featured_image VARCHAR(255) DEFAULT NULL, published_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX uniq_blog_slug (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE footer_links (id INT AUTO_INCREMENT NOT NULL, section VARCHAR(80) NOT NULL, label VARCHAR(120) NOT NULL, url VARCHAR(255) NOT NULL, sort_order INT DEFAULT 0 NOT NULL, open_in_new_tab TINYINT(1) DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE footer_links');
        $this->addSql('DROP TABLE blog_posts');
        $this->addSql('DROP TABLE faq_items');
        $this->addSql('DROP TABLE static_pages');
    }
}
