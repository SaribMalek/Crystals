<?php

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminRoute;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class AdminRolesController extends AbstractController
{
    #[AdminRoute(path: '/permission-control', name: 'permission_control', options: ['methods' => ['GET']])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function permissionControl(): Response
    {
        return $this->render('admin/permission_control.html.twig', [
            'matrix' => [
                [
                    'feature' => 'Dashboard & basic read access',
                    'support' => true,
                    'manager' => true,
                    'super_admin' => true,
                ],
                [
                    'feature' => 'Reports, login history, activity logs',
                    'support' => false,
                    'manager' => true,
                    'super_admin' => true,
                ],
                [
                    'feature' => 'Admin users and role assignment',
                    'support' => false,
                    'manager' => false,
                    'super_admin' => true,
                ],
                [
                    'feature' => 'Security and permission control',
                    'support' => false,
                    'manager' => false,
                    'super_admin' => true,
                ],
            ],
        ]);
    }
}
