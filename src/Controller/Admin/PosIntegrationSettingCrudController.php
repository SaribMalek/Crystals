<?php

namespace App\Controller\Admin;

use App\Entity\PosIntegrationSetting;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PosIntegrationSettingCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PosIntegrationSetting::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            BooleanField::new('is_enabled', 'POS Enabled'),
            TextField::new('provider')->setRequired(false),
            TextField::new('api_url', 'POS API URL')->setRequired(false),
            TextField::new('api_key', 'POS API Key')->setRequired(false),
            TextField::new('location_id', 'Location ID')->setRequired(false),
            DateTimeField::new('updated_at', 'Updated')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('POS Settings')
            ->setEntityLabelInPlural('POS Settings')
            ->setPageTitle(Crud::PAGE_EDIT, 'POS Integration')
            ->setEntityPermission('ROLE_MANAGER');
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->disable(Action::NEW, Action::DELETE);
    }
}

