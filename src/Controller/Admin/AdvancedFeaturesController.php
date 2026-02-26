<?php

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminRoute;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class AdvancedFeaturesController extends AbstractController
{
    #[AdminRoute(path: '/advanced-features', name: 'advanced_features', options: ['methods' => ['GET']])]
    #[IsGranted('ROLE_MANAGER')]
    public function index(): Response
    {
        return $this->render('admin/advanced_features.html.twig');
    }
}
