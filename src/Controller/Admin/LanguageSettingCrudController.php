<?php

namespace App\Controller\Admin;

use App\Entity\LanguageSetting;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class LanguageSettingCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return LanguageSetting::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('code'),
            TextField::new('name'),
            BooleanField::new('is_default', 'Default'),
            BooleanField::new('is_active', 'Active'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Language')
            ->setEntityLabelInPlural('Languages')
            ->setPageTitle(Crud::PAGE_INDEX, 'Multi-Language')
            ->setDefaultSort(['id' => 'ASC']);
    }
}

