<?php

namespace App\Repository;

use App\Entity\PaymentSettings;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PaymentSettings>
 *
 * @method PaymentSettings|null find($id, $lockMode = null, $lockVersion = null)
 * @method PaymentSettings|null findOneBy(array $criteria, array $orderBy = null)
 * @method PaymentSettings[]    findAll()
 * @method PaymentSettings[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PaymentSettingsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PaymentSettings::class);
    }

    public function getOrCreate(): PaymentSettings
    {
        $settings = $this->findOneBy([]);
        if ($settings === null) {
            $settings = new PaymentSettings();
        }

        return $settings;
    }
}
