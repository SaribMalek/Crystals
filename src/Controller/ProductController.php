<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/api/products', name: 'api_products', methods: ['GET'])]
    public function index(ProductRepository $productRepository): JsonResponse
    {
        $products = $productRepository->findAll();
        
        return $this->json($products, 200, [], ['groups' => 'product:read']);
    }

    #[Route('/api/products/seed', name: 'api_products_seed', methods: ['GET'])]
    public function seed(EntityManagerInterface $entityManager): JsonResponse
    {
        $productsData = [
            ['Amethyst Cluster', 'Raw Stones', 45, true, '#9966CC', 'A beautiful purple amethyst cluster for peace and tranquility.'],
            ['Rose Quartz Bracelet', 'Jewelry', 32, false, '#F7CAC9', 'Soft pink rose quartz beads for love and compassion.'],
            ['Clear Quartz Point', 'Healing Points', 28, false, '#E0E0E0', 'Crystal clear quartz for amplification and clarity.'],
            ['Citrine Geode', 'Raw Stones', 85, false, '#E4D00A', 'Bright yellow citrine for abundance and joy.'],
        ];

        foreach ($productsData as $data) {
            $product = new Product();
            $product->setName($data[0]);
            $product->setCategory($data[1]);
            $product->setPrice($data[2]);
            $product->setIsSale($data[3]);
            $product->setDescription($data[5]);
            $product->setImage('default.jpg'); // Placeholder image

            $entityManager->persist($product);
        }

        $entityManager->flush();

        return $this->json(['message' => 'Seeding successful!']);
    }

    #[Route('/api/products/{id}', name: 'api_product_show', methods: ['GET'])]
    public function show(Product $product): JsonResponse
    {
        return $this->json($product, 200, [], ['groups' => 'product:read']);
    }
}
