<?php

namespace App\Controller\Admin;

use App\Entity\PosIntegrationSetting;
use App\Repository\PosIntegrationSettingRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class PosSettingsController extends AbstractController
{
    #[Route('/admin/advanced/pos-settings', name: 'admin_pos_settings', methods: ['GET'])]
    #[IsGranted('ROLE_MANAGER')]
    public function index(
        PosIntegrationSettingRepository $posIntegrationSettingRepository,
        EntityManagerInterface $entityManager,
        AdminUrlGenerator $adminUrlGenerator
    ): RedirectResponse {
        $settings = $posIntegrationSettingRepository->findCurrent();
        if ($settings === null) {
            $settings = new PosIntegrationSetting();
            $entityManager->persist($settings);
            $entityManager->flush();
        }

        $id = $settings->getId();
        if ($id === null) {
            throw $this->createNotFoundException('POS settings could not be resolved.');
        }

        $url = (clone $adminUrlGenerator)
            ->setController(PosIntegrationSettingCrudController::class)
            ->setAction(Action::EDIT)
            ->setEntityId($id)
            ->generateUrl();

        return $this->redirect($url);
    }
}

