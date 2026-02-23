<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    #[Route('/admin/profile', name: 'admin_profile', methods: ['GET', 'POST'])]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $currentUser = $this->getUser();
        if (!$currentUser instanceof User) {
            throw $this->createAccessDeniedException('Profile is available for authenticated users only.');
        }

        if ($request->isMethod('POST')) {
            if (!$this->isCsrfTokenValid('admin_profile_update', (string) $request->request->get('_token'))) {
                $this->addFlash('danger', 'Invalid form token. Please try again.');

                return $this->redirectToRoute('admin_profile');
            }

            $fullName = trim((string) $request->request->get('full_name', ''));
            $currentUser->setFullName($fullName !== '' ? $fullName : null);

            $removeImage = $request->request->getBoolean('remove_profile_image');
            $uploadedFile = $request->files->get('profile_image');

            if ($removeImage) {
                $this->deleteProfileImageFile((string) $currentUser->getProfileImage());
                $currentUser->setProfileImage(null);
            }

            if ($uploadedFile instanceof UploadedFile) {
                $error = $this->storeProfileImage($currentUser, $uploadedFile);
                if ($error !== null) {
                    $this->addFlash('danger', $error);

                    return $this->redirectToRoute('admin_profile');
                }
            }

            $entityManager->persist($currentUser);
            $entityManager->flush();

            $this->addFlash('success', 'Profile updated successfully.');

            return $this->redirectToRoute('admin_profile');
        }

        return $this->render('admin/profile.html.twig', [
            'user' => $currentUser,
        ]);
    }

    private function storeProfileImage(User $user, UploadedFile $uploadedFile): ?string
    {
        if (!str_starts_with((string) $uploadedFile->getMimeType(), 'image/')) {
            return 'Please upload a valid image file.';
        }

        if ($uploadedFile->getSize() !== null && $uploadedFile->getSize() > 5 * 1024 * 1024) {
            return 'Profile image must be 5MB or smaller.';
        }

        $uploadDir = $this->getParameter('kernel.project_dir').'/public/uploads/profiles';
        if (!is_dir($uploadDir) && !mkdir($uploadDir, 0775, true) && !is_dir($uploadDir)) {
            return 'Unable to create profile image directory.';
        }

        $extension = $uploadedFile->guessExtension() ?: 'jpg';
        $fileName = sprintf('user-%d-%d.%s', $user->getId() ?? 0, time(), $extension);

        try {
            $uploadedFile->move($uploadDir, $fileName);
        } catch (\Throwable) {
            return 'Unable to upload profile image right now.';
        }

        $this->deleteProfileImageFile((string) $user->getProfileImage());
        $user->setProfileImage('uploads/profiles/'.$fileName);

        return null;
    }

    private function deleteProfileImageFile(string $relativePath): void
    {
        if ($relativePath === '' || !str_starts_with($relativePath, 'uploads/profiles/')) {
            return;
        }

        $absolutePath = $this->getParameter('kernel.project_dir').'/public/'.$relativePath;
        if (is_file($absolutePath)) {
            @unlink($absolutePath);
        }
    }
}
