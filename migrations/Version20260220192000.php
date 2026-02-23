<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260220192000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add full name and profile image fields to users for admin profile page';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users ADD full_name VARCHAR(120) DEFAULT NULL, ADD profile_image VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE users DROP full_name, DROP profile_image');
    }
}
