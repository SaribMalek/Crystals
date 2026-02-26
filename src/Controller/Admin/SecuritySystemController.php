<?php

namespace App\Controller\Admin;

use App\Repository\UserRepository;
use App\Repository\WebhookLogRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminRoute;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class SecuritySystemController extends AbstractController
{
    #[AdminRoute(path: '/security-system', name: 'security_system', options: ['methods' => ['GET']])]
    #[IsGranted('ROLE_MANAGER')]
    public function index(UserRepository $userRepository, WebhookLogRepository $webhookLogRepository): Response
    {
        $twoFaEnabledCount = (int) $userRepository->createQueryBuilder('u')
            ->select('COUNT(u.id)')
            ->where('u.two_factor_enabled = :enabled')
            ->setParameter('enabled', true)
            ->getQuery()
            ->getSingleScalarResult();

        $webhookCount = (int) $webhookLogRepository->count([]);

        return $this->render('admin/security_system.html.twig', [
            'stats' => [
                'twofa_enabled_users' => $twoFaEnabledCount,
                'webhook_logs' => $webhookCount,
                'login_attempt_limit' => 5,
                'login_lock_minutes' => 15,
            ],
        ]);
    }

    #[AdminRoute(path: '/security/change-password', name: 'change_password', options: ['methods' => ['GET', 'POST']])]
    #[IsGranted('ROLE_SUPPORT')]
    public function changePassword(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        FormFactoryInterface $formFactory,
        EntityManagerInterface $entityManager
    ): Response
    {
        $user = $this->getUser();
        if (!$user instanceof PasswordAuthenticatedUserInterface) {
            throw $this->createAccessDeniedException('Authenticated user required.');
        }

        $form = $formFactory->createBuilder(FormType::class, null, ['csrf_protection' => true])
            ->add('current_password', PasswordType::class, ['label' => 'Current Password'])
            ->add('new_password', RepeatedType::class, [
                'type' => PasswordType::class,
                'invalid_message' => 'Passwords must match.',
                'first_options' => ['label' => 'New Password'],
                'second_options' => ['label' => 'Confirm New Password'],
            ])
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $currentPassword = (string) $form->get('current_password')->getData();
            if (!$passwordHasher->isPasswordValid($user, $currentPassword)) {
                $form->addError(new FormError('Current password is incorrect.'));
            } else {
                $newPassword = (string) $form->get('new_password')->getData();
                if (mb_strlen($newPassword) < 8) {
                    $form->addError(new FormError('New password must be at least 8 characters.'));
                } else {
                    $user->setPassword($passwordHasher->hashPassword($user, $newPassword));
                    $user->eraseCredentials();
                    $entityManager->flush();
                    $this->addFlash('success', 'Password updated successfully.');

                    return $this->redirectToRoute('admin_change_password');
                }
            }
        }

        return $this->render('admin/change_password.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[AdminRoute(path: '/system/backups', name: 'system_backups', options: ['methods' => ['GET']])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function backups(): Response
    {
        $backupDir = $this->getParameter('kernel.project_dir').'/var/backups';
        if (!is_dir($backupDir)) {
            @mkdir($backupDir, 0775, true);
        }

        $files = glob($backupDir.'/*.zip') ?: [];
        rsort($files);

        return $this->render('admin/system_backups.html.twig', [
            'backups' => array_map(static fn (string $path): array => [
                'name' => basename($path),
                'size' => filesize($path) ?: 0,
                'mtime' => filemtime($path) ?: time(),
            ], $files),
        ]);
    }

    #[AdminRoute(path: '/system/backups/create', name: 'system_backups_create', options: ['methods' => ['POST']])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function createBackup(): RedirectResponse
    {
        if (!class_exists(\ZipArchive::class)) {
            $this->addFlash('danger', 'ZipArchive extension is not available on this server.');

            return $this->redirectToRoute('admin_system_backups');
        }

        $projectDir = (string) $this->getParameter('kernel.project_dir');
        $backupDir = $projectDir.'/var/backups';
        if (!is_dir($backupDir)) {
            @mkdir($backupDir, 0775, true);
        }

        $fileName = 'backup_'.date('Ymd_His').'.zip';
        $zipPath = $backupDir.'/'.$fileName;

        $zip = new \ZipArchive();
        if ($zip->open($zipPath, \ZipArchive::CREATE | \ZipArchive::OVERWRITE) !== true) {
            $this->addFlash('danger', 'Unable to create backup archive.');

            return $this->redirectToRoute('admin_system_backups');
        }

        $paths = ['config', 'migrations', 'public/uploads', 'src', 'templates', '.env', '.env.local'];
        foreach ($paths as $relativePath) {
            $absolutePath = $projectDir.'/'.$relativePath;
            if (is_file($absolutePath)) {
                $zip->addFile($absolutePath, $relativePath);
                continue;
            }
            if (is_dir($absolutePath)) {
                $this->addDirectoryToZip($zip, $absolutePath, $relativePath);
            }
        }

        $zip->close();
        $this->addFlash('success', 'Backup created: '.$fileName);

        return $this->redirectToRoute('admin_system_backups');
    }

    #[AdminRoute(path: '/system/backups/restore', name: 'system_backups_restore', options: ['methods' => ['POST']])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function restoreBackup(Request $request): RedirectResponse
    {
        $fileName = basename((string) $request->request->get('backup_file', ''));
        if ($fileName === '') {
            $this->addFlash('danger', 'Select a backup file to restore.');

            return $this->redirectToRoute('admin_system_backups');
        }

        if (!class_exists(\ZipArchive::class)) {
            $this->addFlash('danger', 'ZipArchive extension is not available on this server.');

            return $this->redirectToRoute('admin_system_backups');
        }

        $projectDir = (string) $this->getParameter('kernel.project_dir');
        $zipPath = $projectDir.'/var/backups/'.$fileName;
        if (!is_file($zipPath)) {
            $this->addFlash('danger', 'Backup file not found.');

            return $this->redirectToRoute('admin_system_backups');
        }

        $zip = new \ZipArchive();
        if ($zip->open($zipPath) !== true) {
            $this->addFlash('danger', 'Could not open backup archive.');

            return $this->redirectToRoute('admin_system_backups');
        }

        $extractTo = $projectDir;
        $zip->extractTo($extractTo);
        $zip->close();

        $this->addFlash('warning', 'Backup restored. Please verify files and clear cache if needed.');

        return $this->redirectToRoute('admin_system_backups');
    }

    #[AdminRoute(path: '/system/error-logs', name: 'error_logs', options: ['methods' => ['GET']])]
    #[IsGranted('ROLE_MANAGER')]
    public function errorLogs(): Response
    {
        $projectDir = (string) $this->getParameter('kernel.project_dir');
        $devLog = $projectDir.'/var/log/dev.log';
        $prodLog = $projectDir.'/var/log/prod.log';

        return $this->render('admin/error_logs.html.twig', [
            'dev_log' => $this->tailFile($devLog, 220),
            'prod_log' => $this->tailFile($prodLog, 220),
            'dev_path' => $devLog,
            'prod_path' => $prodLog,
        ]);
    }

    private function addDirectoryToZip(\ZipArchive $zip, string $absolutePath, string $relativePath): void
    {
        $iterator = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($absolutePath, \FilesystemIterator::SKIP_DOTS),
            \RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $item) {
            $itemPath = (string) $item->getPathname();
            $localPath = $relativePath.'/'.ltrim(str_replace('\\', '/', substr($itemPath, strlen($absolutePath))), '/');
            if ($item->isDir()) {
                $zip->addEmptyDir($localPath);
            } else {
                $zip->addFile($itemPath, $localPath);
            }
        }
    }

    private function tailFile(string $path, int $maxLines): string
    {
        if (!is_file($path)) {
            return 'Log file not found.';
        }

        $lines = @file($path, FILE_IGNORE_NEW_LINES);
        if (!is_array($lines)) {
            return 'Unable to read log file.';
        }

        return implode("\n", array_slice($lines, -$maxLines));
    }
}
