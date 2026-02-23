<?php

namespace App\Controller\Admin;

use App\Entity\ShipmentTracking;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ShipmentTrackingCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ShipmentTracking::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            IntegerField::new('order_id', 'Order ID')->setRequired(false),
            TextField::new('delivery_partner')->setRequired(false),
            TextField::new('tracking_id', 'Tracking ID'),
            TextField::new('status'),
            TextField::new('estimated_delivery_time')->setRequired(false),
            DateTimeField::new('shipped_at')->setRequired(false),
            DateTimeField::new('delivered_at')->setRequired(false),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Shipment Tracking')
            ->setEntityLabelInPlural('Tracking IDs')
            ->setPageTitle(Crud::PAGE_INDEX, 'Tracking ID Management')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'order_id', 'delivery_partner', 'tracking_id', 'status']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
