<?php

namespace App\Repository;

use App\Entity\PosIntegrationSetting;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PosIntegrationSetting>
 */
class PosIntegrationSettingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PosIntegrationSetting::class);
    }

    public function findCurrent(): ?PosIntegrationSetting
    {
        return $this->findOneBy([], ['id' => 'ASC']);
    }
}

