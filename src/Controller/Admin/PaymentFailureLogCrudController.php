<?php

namespace App\Controller\Admin;

use App\Entity\PaymentFailureLog;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

class PaymentFailureLogCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PaymentFailureLog::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('order_ref', 'Order')->setRequired(false),
            EmailField::new('customer_email', 'Customer')->setRequired(false),
            TextField::new('gateway')->setRequired(false),
            TextField::new('method')->setRequired(false),
            TextField::new('error_code')->setRequired(false),
            TextareaField::new('error_message'),
            TextareaField::new('context_payload')->setRequired(false)->hideOnIndex(),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Payment Failure')
            ->setEntityLabelInPlural('Payment Failure Logs')
            ->setPageTitle(Crud::PAGE_INDEX, 'Payment Failure Logs')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'customer_email', 'gateway', 'method', 'error_code', 'error_message']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::EDIT, Action::DELETE);
    }
}
