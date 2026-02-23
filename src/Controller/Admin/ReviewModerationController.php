<?php

namespace App\Controller\Admin;

use App\Entity\ProductReview;
use App\Repository\ProductReviewRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReviewModerationController extends AbstractController
{
    #[Route('/admin/reviews/{id}/approve', name: 'admin_review_approve', methods: ['GET'])]
    public function approve(ProductReview $review, EntityManagerInterface $entityManager): RedirectResponse
    {
        $this->moderate($review, ProductReview::STATUS_APPROVED, false, $entityManager);
        $this->addFlash('success', 'Review approved successfully.');

        return $this->redirectToRoute('admin', [
            'crudControllerFqcn' => ProductReviewCrudController::class,
            'action' => 'index',
        ]);
    }

    #[Route('/admin/reviews/{id}/reject', name: 'admin_review_reject', methods: ['GET'])]
    public function reject(ProductReview $review, EntityManagerInterface $entityManager): RedirectResponse
    {
        $this->moderate($review, ProductReview::STATUS_REJECTED, false, $entityManager);
        $this->addFlash('success', 'Review rejected.');

        return $this->redirectToRoute('admin', [
            'crudControllerFqcn' => ProductReviewCrudController::class,
            'action' => 'index',
        ]);
    }

    #[Route('/admin/reviews/{id}/spam', name: 'admin_review_mark_spam', methods: ['GET'])]
    public function markSpam(ProductReview $review, EntityManagerInterface $entityManager): RedirectResponse
    {
        $this->moderate($review, ProductReview::STATUS_SPAM, true, $entityManager);
        $this->addFlash('success', 'Review marked as spam.');

        return $this->redirectToRoute('admin', [
            'crudControllerFqcn' => ProductReviewCrudController::class,
            'action' => 'index',
        ]);
    }

    #[Route('/admin/reviews/analytics', name: 'admin_review_analytics', methods: ['GET'])]
    public function analytics(ProductReviewRepository $reviewRepository): Response
    {
        $allReviews = $reviewRepository->findAll();
        $total = count($allReviews);

        $statusCounts = [
            ProductReview::STATUS_PENDING => 0,
            ProductReview::STATUS_APPROVED => 0,
            ProductReview::STATUS_REJECTED => 0,
            ProductReview::STATUS_SPAM => 0,
        ];
        $ratingCounts = [1 => 0, 2 => 0, 3 => 0, 4 => 0, 5 => 0];
        $ratingSum = 0;

        foreach ($allReviews as $review) {
            $status = $review->getStatus();
            if (isset($statusCounts[$status])) {
                $statusCounts[$status]++;
            }

            $rating = max(1, min(5, $review->getRating()));
            $ratingCounts[$rating]++;
            $ratingSum += $rating;
        }

        $averageRating = $total > 0 ? round($ratingSum / $total, 2) : 0.0;

        return $this->render('admin/review_analytics.html.twig', [
            'summary' => [
                'total' => $total,
                'average_rating' => $averageRating,
                'spam_count' => $statusCounts[ProductReview::STATUS_SPAM],
            ],
            'status_counts' => $statusCounts,
            'rating_counts' => $ratingCounts,
        ]);
    }

    private function moderate(ProductReview $review, string $status, bool $isSpam, EntityManagerInterface $entityManager): void
    {
        $review->setStatus($status);
        $review->setIsSpam($isSpam);
        $review->setModeratedAt(new \DateTimeImmutable());
        $review->setModeratedBy($this->getUser()?->getUserIdentifier());
        if ($isSpam) {
            $review->setModerationNote(trim(($review->getModerationNote() ?? '').' Marked as spam by admin.'));
        }

        $entityManager->flush();
    }
}
