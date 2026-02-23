<?php

namespace App\Repository;

use App\Entity\HeaderMenu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<HeaderMenu>
 */
class HeaderMenuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HeaderMenu::class);
    }

    /**
     * @return HeaderMenu[]
     */
    public function findActiveTopLevelWithChildren(): array
    {
        $items = $this->createQueryBuilder('m')
            ->leftJoin('m.children', 'c')
            ->addSelect('c')
            ->where('m.parent IS NULL')
            ->andWhere('m.is_active = :active')
            ->setParameter('active', true)
            ->orderBy('m.sort_order', 'ASC')
            ->addOrderBy('m.label', 'ASC')
            ->getQuery()
            ->getResult();

        return array_values(array_filter($items, static fn (HeaderMenu $item): bool => $item->isIsActive()));
    }
}

