<?php

namespace App\Controller\Admin;

use App\Entity\StockHistory;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class BulkStockController extends AbstractController
{
    #[Route('/admin/inventory/bulk-stock', name: 'admin_bulk_stock_update', methods: ['GET', 'POST'])]
    public function index(
        Request $request,
        ProductRepository $productRepository,
        EntityManagerInterface $entityManager,
        Security $security,
        AdminUrlGenerator $adminUrlGenerator
    ): Response {
        $results = [];
        $rawInput = '';

        if ($request->isMethod('POST')) {
            $rawInput = trim((string) $request->request->get('stock_rows', ''));
            $lines = preg_split('/\r\n|\r|\n/', $rawInput) ?: [];
            $changedBy = method_exists($security->getUser(), 'getUserIdentifier') ? (string) $security->getUser()->getUserIdentifier() : null;

            foreach ($lines as $index => $line) {
                $line = trim($line);
                if ($line === '') {
                    continue;
                }

                $parts = array_map('trim', explode(',', $line));
                if (count($parts) < 2) {
                    $results[] = sprintf('Line %d skipped: expected "product_id,stock".', $index + 1);
                    continue;
                }

                $productId = (int) $parts[0];
                $newStock = (int) $parts[1];
                $note = $parts[2] ?? 'Bulk stock update';

                if ($productId <= 0 || $newStock < 0) {
                    $results[] = sprintf('Line %d skipped: invalid product id/stock.', $index + 1);
                    continue;
                }

                $product = $productRepository->find($productId);
                if ($product === null) {
                    $results[] = sprintf('Line %d skipped: product #%d not found.', $index + 1, $productId);
                    continue;
                }

                $previous = (int) $product->getStock();
                if ($previous === $newStock) {
                    $results[] = sprintf('Product #%d unchanged (stock already %d).', $productId, $newStock);
                    continue;
                }

                $product->setStock($newStock);

                $history = new StockHistory();
                $history->setProduct($product);
                $history->setPreviousStock($previous);
                $history->setNewStock($newStock);
                $history->setChangeAmount($newStock - $previous);
                $history->setNote($note);
                $history->setChangedBy($changedBy);

                $entityManager->persist($history);
                $results[] = sprintf('Updated product #%d from %d to %d.', $productId, $previous, $newStock);
            }

            $entityManager->flush();
        }

        return $this->render('admin/bulk_stock_update.html.twig', [
            'results' => $results,
            'raw_input' => $rawInput,
            'history_url' => (clone $adminUrlGenerator)->setController(StockHistoryCrudController::class)->generateUrl(),
            'products_url' => (clone $adminUrlGenerator)->setController(ProductCrudController::class)->generateUrl(),
        ]);
    }
}
