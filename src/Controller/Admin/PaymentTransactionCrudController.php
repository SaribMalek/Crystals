<?php

namespace App\Controller\Admin;

use App\Entity\PaymentTransaction;
use App\Entity\PaymentSettings;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

class PaymentTransactionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PaymentTransaction::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('order_ref', 'Order')->setRequired(false),
            TextField::new('gateway'),
            TextField::new('method'),
            ChoiceField::new('mode')->setChoices(array_flip(PaymentSettings::modeChoices())),
            TextField::new('external_id', 'Gateway Txn ID')->setRequired(false),
            TextField::new('status'),
            MoneyField::new('amount')->setCurrency('USD'),
            TextField::new('currency'),
            EmailField::new('customer_email', 'Customer')->setRequired(false),
            TextareaField::new('note')->setRequired(false)->hideOnIndex(),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Payment Transaction')
            ->setEntityLabelInPlural('Transaction History')
            ->setPageTitle(Crud::PAGE_INDEX, 'Payment Transaction History')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'gateway', 'method', 'external_id', 'status', 'customer_email', 'amount']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::EDIT, Action::DELETE);
    }
}
