<?php

namespace App\Repository;

use App\Entity\Announcement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Announcement>
 */
class AnnouncementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Announcement::class);
    }

    /**
     * @return Announcement[]
     */
    public function findActiveForDisplay(\DateTimeImmutable $now, int $limit = 3): array
    {
        return $this->createQueryBuilder('a')
            ->where('a.is_active = :active')
            ->andWhere('a.starts_at IS NULL OR a.starts_at <= :now')
            ->andWhere('a.ends_at IS NULL OR a.ends_at >= :now')
            ->setParameter('active', true)
            ->setParameter('now', $now)
            ->orderBy('a.sort_order', 'ASC')
            ->addOrderBy('a.id', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
