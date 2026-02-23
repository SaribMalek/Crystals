<?php

namespace App\Controller\Admin;

use App\Entity\OrderItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;

class OrderItemCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return OrderItem::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('order_ref')->setLabel('Order'),
            AssociationField::new('product'),
            IntegerField::new('quantity'),
            MoneyField::new('price')->setCurrency('USD'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Order Item')
            ->setEntityLabelInPlural('Order Items')
            ->setPageTitle(Crud::PAGE_INDEX, 'Order Items List')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'quantity', 'price', 'product.name', 'order_ref.customer_email', 'order_ref.status'])
            ->setPaginatorPageSize(25);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, static fn (Action $action) => $action->setLabel('Add Order Item')->setIcon('fas fa-plus'))
            ->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
