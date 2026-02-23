<?php

namespace App\Controller\Admin;

use App\Entity\ShippingZone;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ShippingZoneCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ShippingZone::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            TextField::new('country'),
            TextField::new('state')->setRequired(false),
            TextField::new('city')->setRequired(false),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Shipping Zone')
            ->setEntityLabelInPlural('Shipping Zones')
            ->setPageTitle(Crud::PAGE_INDEX, 'Shipping Zones')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'name', 'country', 'state', 'city']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
