<?php

namespace App\Controller\Admin;

use App\Entity\FooterLink;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class FooterLinkCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return FooterLink::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            ChoiceField::new('section')->setChoices(FooterLink::sectionChoices()),
            TextField::new('label'),
            TextField::new('url'),
            IntegerField::new('sort_order', 'Sort Order'),
            BooleanField::new('open_in_new_tab', 'Open In New Tab'),
            BooleanField::new('is_active', 'Active'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Footer Link')
            ->setEntityLabelInPlural('Footer Links')
            ->setPageTitle(Crud::PAGE_INDEX, 'Footer Links')
            ->setDefaultSort(['section' => 'ASC', 'sort_order' => 'ASC', 'id' => 'DESC'])
            ->setSearchFields(['id', 'section', 'label', 'url']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
