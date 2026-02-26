<?php

namespace App\Controller\Admin;

use App\Entity\WebhookLog;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class WebhookLogCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return WebhookLog::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('provider'),
            TextField::new('event_type', 'Event')->setRequired(false),
            TextField::new('status_code', 'HTTP Status')->setRequired(false),
            TextareaField::new('payload')->hideOnIndex()->setRequired(false),
            TextareaField::new('response_message', 'Response/Notes')->hideOnIndex()->setRequired(false),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Webhook Log')
            ->setEntityLabelInPlural('Webhook Logs')
            ->setEntityPermission('ROLE_MANAGER')
            ->setPageTitle(Crud::PAGE_INDEX, 'Webhook Logs')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['provider', 'event_type', 'status_code', 'payload', 'response_message']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::EDIT);
    }
}

