<?php

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminRoute;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UploadsController extends AbstractController
{
    #[AdminRoute(path: '/uploads/products', name: 'uploads_products', options: ['methods' => ['GET']])]
    #[Route('/uploads/products', name: 'uploads_products_compat', methods: ['GET'])]
    public function products(): Response
    {
        $uploadsDir = $this->getParameter('kernel.project_dir').'/public/uploads/products';
        $files = [];

        if (is_dir($uploadsDir)) {
            $items = scandir($uploadsDir);
            if ($items !== false) {
                foreach ($items as $item) {
                    if ($item === '.' || $item === '..') {
                        continue;
                    }
                    $fullPath = $uploadsDir.'/'.$item;
                    if (is_file($fullPath)) {
                        $files[] = [
                            'name' => $item,
                            'url' => '/uploads/products/'.$item,
                            'size' => (int) filesize($fullPath),
                            'modified' => (int) filemtime($fullPath),
                        ];
                    }
                }
            }
        }

        usort($files, static fn (array $a, array $b): int => $b['modified'] <=> $a['modified']);

        return $this->render('admin/uploads_products.html.twig', [
            'files' => $files,
        ]);
    }
}
