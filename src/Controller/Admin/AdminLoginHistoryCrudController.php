<?php

namespace App\Controller\Admin;

use App\Entity\AdminLoginHistory;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AdminLoginHistoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AdminLoginHistory::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('user')->setRequired(false),
            TextField::new('email'),
            TextField::new('ip_address', 'IP Address')->setRequired(false),
            TextareaField::new('user_agent', 'User Agent')->hideOnIndex()->setRequired(false),
            DateTimeField::new('logged_in_at', 'Logged In At')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Login History')
            ->setEntityLabelInPlural('Login History')
            ->setPageTitle(Crud::PAGE_INDEX, 'Admin Login History')
            ->setEntityPermission('ROLE_MANAGER')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'email', 'ip_address', 'user_agent']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::EDIT, Action::DELETE);
    }
}
