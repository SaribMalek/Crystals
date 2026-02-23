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

        // Truncate Tables
        $connection = $this->entityManager->getConnection();
        
        $io->note('Clearing existing products and categories...');
        $connection->executeStatement('SET FOREIGN_KEY_CHECKS = 0;');
        $connection->executeStatement('TRUNCATE TABLE product;');
        $connection->executeStatement('TRUNCATE TABLE category;');
        $connection->executeStatement('SET FOREIGN_KEY_CHECKS = 1;');

        // Define Categories
        $categoriesData = [
            'Healing Stones' => 'healing-stones',
            'Crystal Jewelry' => 'crystal-jewelry',
            'Reiki Tools' => 'reiki-tools',
            'Vastu & Feng Shui' => 'vastu-feng-shui',
        ];

        $categories = [];
        foreach ($categoriesData as $name => $slug) {
            $category = $this->entityManager->getRepository(\App\Entity\Category::class)->findOneBy(['slug' => $slug]);
            if (!$category) {
                $category = new \App\Entity\Category();
                $category->setName($name);
                $category->setSlug($slug);
                $this->entityManager->persist($category);
            }
            $categories[$name] = $category;
        }

        $productsData = [
            // Healing Stones
            ['Amethyst Cluster', 'Healing Stones', 45, true, 'A stunning Uruguayan Amethyst cluster. Known as the "Stone of Peace," it radiates calming energy, perfect for meditation and stress relief.', 'amethyst.jpg'],
            ['Rose Quartz Heart', 'Healing Stones', 25, false, 'A smooth, heart-shaped Rose Quartz. The ultimate stone of love, it opens the heart chakra to compassion, self-love, and emotional healing.', 'rose-quartz.jpg'],
            ['Black Tourmaline Raw', 'Healing Stones', 15, false, 'Powerful grounding stone. Acts as a protective shield against negative energies and EMF radiation. Essential for every home.', 'black-tourmaline.jpg'],
            ['Clear Quartz Wand', 'Healing Stones', 35, false, 'The "Master Healer." This double-terminated wand amplifies energy and intention. Excellent for manifesting and clarity.', 'clear-quartz.jpg'],
            ['Citrine Point', 'Healing Stones', 30, true, 'The "Merchant\'s Stone." This natural heat-treated citrine attracts abundance, prosperity, and success. Never needs cleansing.', 'citrine.jpg'],

            // Crystal Jewelry
            ['7 Chakra Bracelet', 'Crystal Jewelry', 22, true, 'Handcrafted with seven distinct stones to balance each chakra. A wearable tool for spiritual alignment and daily energy maintenance.', 'chakra-bracelet.jpg'],
            ['Lapis Lazuli Pendant', 'Crystal Jewelry', 55, false, 'Deep celestial blue pendant with flecks of golden pyrite. Stimulates wisdom, inner truth, and intellectual ability.', 'lapis-pendant.jpg'],
            ['Sandalwood & Quartz Mala', 'Crystal Jewelry', 48, false, '108-bead prayer mala. Combines the grounding scent of sandalwood with the amplifying power of clear quartz for deep meditation.', 'mala.jpg'],
            ['Labradorite Mystic Ring', 'Crystal Jewelry', 65, false, 'Sterling silver ring featuring a high-flash labradorite. A stone of transformation, it provides protection and strengthens intuition.', 'labradorite-ring.php'],

            // Reiki Tools
            ['Egyptian Pendulum', 'Reiki Tools', 28, false, 'Brass Egyptian-style pendulum (Karnak). Highly sensitive tool for dowsing, energy healing, and connecting with higher guidance.', 'pendulum.jpg'],
            ['Chakra Engraved Set', 'Reiki Tools', 42, true, 'Set of 7 flat oval stones engraved with sacred chakra symbols. Ideal for Reiki practitioners during distance or hands-on healing.', 'chakra-set.jpg'],
            ['Selenite Charging Plate', 'Reiki Tools', 35, false, 'Exquisite selenite plate to cleanse and charge your crystals. Known as "liquid light," it removes stagnant energy instantly.', 'selenite-plate.jpg'],
            ['Usui Reiki Symbols Set', 'Reiki Tools', 50, false, 'Four master healing stones engraved with the traditional Usui Reiki symbols: Cho Ku Rei, Sei He Ki, Hon Sha Ze Sho Nen, and Dai Ko Myo.', 'reiki-symbols.jpg'],

            // Vastu & Feng Shui
            ['Vastu Copper Pyramid', 'Vastu & Feng Shui', 85, false, 'Multi-layered copper pyramid designed to neutralize Vastu Doshas (architectural defects). Harmonizes the energy of any living space.', 'copper-pyramid.jpg'],
            ['Feng Shui Money Tree', 'Vastu & Feng Shui', 45, true, 'Hand-twisted wire tree with citrine leaves on a quartz base. Placed in the wealth corner to attract financial growth and abundance.', 'money-tree.jpg'],
            ['Black Obsidian Tortoise', 'Vastu & Feng Shui', 38, false, 'Symbol of longevity and stability. Crafted from protective black obsidian to guard against office politics and ensure steady progress.', 'obsidian-tortoise.jpg'],
            ['Rose Quartz Mandarin Ducks', 'Vastu & Feng Shui', 55, false, 'A pair of Mandarin ducks carved from Rose Quartz. The ultimate Feng Shui cure for love, fidelity, and marital harmony.', 'mandarin-ducks.jpg'],
        ];

        foreach ($productsData as $data) {
            if (!isset($categories[$data[1]])) {
                $io->warning("Category '{$data[1]}' not found for product '{$data[0]}'. Skipping.");
                continue;
            }
            $product = new Product();
            $product->setName($data[0]);
            $product->setCategory($categories[$data[1]]);
            $product->setPrice($data[2]);
            $product->setIsSale($data[3]);
            $product->setDescription($data[4]);
            $product->setImage($data[5]);
            $product->setStock(rand(5, 50));
            $product->setIsFeatured(rand(0, 1) === 1);

            $this->entityManager->persist($product);
        }

        $this->entityManager->flush();

        $io->success('Database seeded successfully with ' . count($productsData) . ' products across ' . count($categories) . ' categories!');

        return Command::SUCCESS;
    }
}
