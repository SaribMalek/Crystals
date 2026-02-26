<?php

namespace App\Controller\Admin;

use App\Entity\AdminActivityLog;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AdminActivityLogCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AdminActivityLog::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('user')->setRequired(false),
            TextField::new('email'),
            TextField::new('activity_type', 'Type')->setRequired(false),
            TextField::new('route_name', 'Route')->setRequired(false),
            TextField::new('http_method', 'Method'),
            TextField::new('path'),
            TextField::new('ip_address', 'IP Address')->setRequired(false),
            TextareaField::new('user_agent', 'User Agent')->hideOnIndex()->setRequired(false),
            DateTimeField::new('created_at', 'Created At')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Activity Log')
            ->setEntityLabelInPlural('Activity Logs')
            ->setPageTitle(Crud::PAGE_INDEX, 'Admin Activity Logs')
            ->setEntityPermission('ROLE_MANAGER')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'email', 'activity_type', 'route_name', 'path', 'http_method', 'ip_address']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::EDIT, Action::DELETE);
    }
}

