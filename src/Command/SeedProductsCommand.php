<?php

namespace App\Command;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:seed-products',
    description: 'Seed initial products into the database',
)]
class SeedProductsCommand extends Command
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct();
        $this->entityManager = $entityManager;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $productsData = [
            ['Amethyst Cluster', 'Raw Stones', 45, true, 'A beautiful purple amethyst cluster for peace and tranquility.'],
            ['Rose Quartz Bracelet', 'Jewelry', 32, false, 'Soft pink rose quartz beads for love and compassion.'],
            ['Clear Quartz Point', 'Healing Points', 28, false, 'Crystal clear quartz for amplification and clarity.'],
            ['Citrine Geode', 'Raw Stones', 85, false, 'Bright yellow citrine for abundance and joy.'],
            ['Lapis Lazuli Pendant', 'Jewelry', 55, true, 'Deep blue lapis lazuli for wisdom and truth.'],
            ['Black Tourmaline', 'Raw Stones', 15, false, 'Powerful grounding stone for protection.'],
        ];

        foreach ($productsData as $data) {
            $product = new Product();
            $product->setName($data[0]);
            $product->setCategory($data[1]);
            $product->setPrice($data[2]);
            $product->setIsSale($data[3]);
            $product->setDescription($data[4]);
            $product->setImage('default.jpg');

            $this->entityManager->persist($product);
        }

        $this->entityManager->flush();

        $io->success('Database seeded successfully with ' . count($productsData) . ' products!');

        return Command::SUCCESS;
    }
}
