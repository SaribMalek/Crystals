<?php

namespace App\Controller;

use App\Entity\HeaderMenu;
use App\Repository\HeaderMenuRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MenuController extends AbstractController
{
    private function normalizePath(?string $path): string
    {
        $value = trim((string) $path);
        if ($value === '') {
            return '#';
        }

        if (str_starts_with($value, 'http://') || str_starts_with($value, 'https://') || str_starts_with($value, '/')) {
            return $value;
        }

        return '/'.ltrim($value, '/');
    }

    #[Route('/api/header-menu', name: 'api_header_menu', methods: ['GET'])]
    public function headerMenu(HeaderMenuRepository $headerMenuRepository): JsonResponse
    {
        try {
            $topLevelItems = $headerMenuRepository->findActiveTopLevelWithChildren();
        } catch (\Throwable) {
            // Graceful fallback when DB schema is not ready yet.
            return $this->json([]);
        }

        $payload = array_map(function (HeaderMenu $item): array {
            $children = [];
            foreach ($item->getChildren() as $child) {
                if (!$child->isIsActive()) {
                    continue;
                }
                $children[] = [
                    'label' => (string) $child->getLabel(),
                    'path' => $this->normalizePath($child->getPath()),
                    'openInNewTab' => $child->isOpenInNewTab(),
                ];
            }

            return [
                'name' => (string) $item->getLabel(),
                'path' => $this->normalizePath($item->getPath()),
                'openInNewTab' => $item->isOpenInNewTab(),
                'dropdown' => $children,
            ];
        }, $topLevelItems);

        return $this->json($payload);
    }
}
