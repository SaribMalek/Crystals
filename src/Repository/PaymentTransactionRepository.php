<?php

namespace App\Repository;

use App\Entity\PaymentTransaction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PaymentTransaction>
 *
 * @method PaymentTransaction|null find($id, $lockMode = null, $lockVersion = null)
 * @method PaymentTransaction|null findOneBy(array $criteria, array $orderBy = null)
 * @method PaymentTransaction[]    findAll()
 * @method PaymentTransaction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PaymentTransactionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PaymentTransaction::class);
    }
}
