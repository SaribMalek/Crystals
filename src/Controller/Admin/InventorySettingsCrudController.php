<?php

namespace App\Controller\Admin;

use App\Entity\InventorySettings;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;

class InventorySettingsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return InventorySettings::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            BooleanField::new('stock_tracking_enabled', 'Stock Tracking Enabled'),
            IntegerField::new('low_stock_threshold', 'Low Stock Threshold'),
            BooleanField::new('out_of_stock_notifications_enabled', 'Out-of-Stock Notifications'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Inventory Setting')
            ->setEntityLabelInPlural('Inventory Settings')
            ->setPageTitle(Crud::PAGE_INDEX, 'Inventory Settings')
            ->setDefaultSort(['id' => 'ASC']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW)
            ->update(Crud::PAGE_INDEX, Action::EDIT, static fn (Action $action) => $action->setLabel('Edit Settings')->setIcon('fas fa-cog'))
            ->disable(Action::DELETE);
    }
}
