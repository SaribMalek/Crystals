<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/api/products', name: 'api_products', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $products = [
            [
                'id' => 1,
                'name' => 'Amethyst Cluster',
                'category' => 'Raw Stones',
                'price' => 45,
                'oldPrice' => 55,
                'isSale' => true,
                'color' => '#9966CC',
                'description' => 'A beautiful purple amethyst cluster for peace and tranquility.'
            ],
            [
                'id' => 2,
                'name' => 'Rose Quartz Bracelet',
                'category' => 'Jewelry',
                'price' => 32,
                'isNew' => true,
                'color' => '#F7CAC9',
                'description' => 'Soft pink rose quartz beads for love and compassion.'
            ],
            [
                'id' => 3,
                'name' => 'Clear Quartz Point',
                'category' => 'Healing Points',
                'price' => 28,
                'color' => '#E0E0E0',
                'description' => 'Crystal clear quartz for amplification and clarity.'
            ],
            [
                'id' => 4,
                'name' => 'Citrine Geode',
                'category' => 'Raw Stones',
                'price' => 85,
                'color' => '#E4D00A',
                'description' => 'Bright yellow citrine for abundance and joy.'
            ],
        ];

        $response = new JsonResponse($products);
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
}
