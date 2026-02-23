<?php

namespace App\Repository;

use App\Entity\PaymentFailureLog;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PaymentFailureLog>
 *
 * @method PaymentFailureLog|null find($id, $lockMode = null, $lockVersion = null)
 * @method PaymentFailureLog|null findOneBy(array $criteria, array $orderBy = null)
 * @method PaymentFailureLog[]    findAll()
 * @method PaymentFailureLog[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PaymentFailureLogRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PaymentFailureLog::class);
    }
}
