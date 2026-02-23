<?php

namespace App\Controller\Admin;

use App\Entity\StockHistory;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class StockHistoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return StockHistory::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('product'),
            IntegerField::new('previous_stock', 'Previous'),
            IntegerField::new('new_stock', 'New'),
            IntegerField::new('change_amount', 'Change'),
            TextField::new('note')->setRequired(false),
            TextField::new('changed_by', 'Changed By')->setRequired(false),
            DateTimeField::new('changed_at', 'Changed At'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Stock Log')
            ->setEntityLabelInPlural('Stock History Log')
            ->setPageTitle(Crud::PAGE_INDEX, 'Stock History Log')
            ->setDefaultSort(['changed_at' => 'DESC'])
            ->setPaginatorPageSize(30);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::EDIT, Action::DELETE)
            ->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
