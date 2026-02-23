<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260220164000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Inventory settings, stock history log, and product supplier reference';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE product ADD supplier_reference VARCHAR(120) DEFAULT NULL');
        $this->addSql('CREATE TABLE inventory_settings (id INT AUTO_INCREMENT NOT NULL, stock_tracking_enabled TINYINT(1) NOT NULL, low_stock_threshold INT NOT NULL, out_of_stock_notifications_enabled TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE stock_history (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, previous_stock INT NOT NULL, new_stock INT NOT NULL, change_amount INT NOT NULL, note VARCHAR(255) DEFAULT NULL, changed_by VARCHAR(180) DEFAULT NULL, changed_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_4FA8AFEA4584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE stock_history ADD CONSTRAINT FK_4FA8AFEA4584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('INSERT INTO inventory_settings (stock_tracking_enabled, low_stock_threshold, out_of_stock_notifications_enabled) VALUES (1, 5, 1)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE stock_history DROP FOREIGN KEY FK_4FA8AFEA4584665A');
        $this->addSql('DROP TABLE stock_history');
        $this->addSql('DROP TABLE inventory_settings');
        $this->addSql('ALTER TABLE product DROP supplier_reference');
    }
}
