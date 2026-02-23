<?php

namespace App\Controller\Admin;

use App\Entity\ShippingMethod;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ShippingMethodCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ShippingMethod::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            ChoiceField::new('type')->setChoices(ShippingMethod::typeChoices()),
            AssociationField::new('zone')->setRequired(false),
            MoneyField::new('flat_rate')->setCurrency('USD'),
            MoneyField::new('free_shipping_min_order')->setCurrency('USD'),
            MoneyField::new('weight_based_rate')->setCurrency('USD'),
            TextField::new('delivery_partner')->setRequired(false),
            TextField::new('estimated_delivery_time')->setRequired(false),
            BooleanField::new('cod_enabled', 'Cash on Delivery Enabled'),
            MoneyField::new('cod_min_order')->setCurrency('USD'),
            MoneyField::new('cod_max_order')->setCurrency('USD'),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Shipping Method')
            ->setEntityLabelInPlural('Shipping Methods')
            ->setPageTitle(Crud::PAGE_INDEX, 'Shipping Methods')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'name', 'type', 'delivery_partner', 'estimated_delivery_time']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
