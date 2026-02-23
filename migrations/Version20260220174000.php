<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260220174000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add order details fields for status flow, address, payment, notes and partial refunds';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE `order` ADD shipping_address LONGTEXT DEFAULT NULL, ADD payment_method VARCHAR(60) DEFAULT NULL, ADD internal_note LONGTEXT DEFAULT NULL, ADD refunded_amount NUMERIC(10, 2) DEFAULT 0.00 NOT NULL');
        $this->addSql('UPDATE `order` SET refunded_amount = 0.00 WHERE refunded_amount IS NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE `order` DROP shipping_address, DROP payment_method, DROP internal_note, DROP refunded_amount');
    }
}
