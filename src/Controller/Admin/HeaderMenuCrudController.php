<?php

namespace App\Controller\Admin;

use App\Entity\HeaderMenu;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class HeaderMenuCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return HeaderMenu::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('label'),
            TextField::new('path')->setHelp('Example: /shop or /shop?search=Rose+Quartz'),
            AssociationField::new('parent')->setRequired(false),
            IntegerField::new('sort_order')->setLabel('Sort Order'),
            BooleanField::new('is_active')->setLabel('Active'),
            BooleanField::new('open_in_new_tab')->setLabel('Open In New Tab'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Header Menu Item')
            ->setEntityLabelInPlural('Header Menu Items')
            ->setPageTitle(Crud::PAGE_INDEX, 'Header Menu Manager')
            ->setSearchFields(['id', 'label', 'path', 'parent.label'])
            ->setDefaultSort(['sort_order' => 'ASC', 'id' => 'ASC']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, static fn (Action $action) => $action->setLabel('Add Menu Item')->setIcon('fas fa-plus'))
            ->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
