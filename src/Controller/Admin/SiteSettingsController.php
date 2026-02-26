<?php

namespace App\Controller\Admin;

use App\Entity\SiteSetting;
use App\Repository\SiteSettingRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class SiteSettingsController extends AbstractController
{
    #[Route('/admin/site-settings', name: 'admin_site_settings', methods: ['GET'])]
    #[IsGranted('ROLE_MANAGER')]
    public function index(
        SiteSettingRepository $siteSettingRepository,
        EntityManagerInterface $entityManager,
        AdminUrlGenerator $adminUrlGenerator
    ): RedirectResponse {
        $settings = $siteSettingRepository->findCurrent();
        if ($settings === null) {
            $settings = new SiteSetting();
            $entityManager->persist($settings);
            $entityManager->flush();
        }

        $id = $settings->getId();
        if ($id === null) {
            throw $this->createNotFoundException('Site settings record could not be resolved.');
        }

        $url = (clone $adminUrlGenerator)
            ->setController(SiteSettingCrudController::class)
            ->setAction(Action::EDIT)
            ->setEntityId($id)
            ->generateUrl();

        return $this->redirect($url);
    }
}

