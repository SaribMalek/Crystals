<?php

namespace App\Controller\Admin;

use App\Entity\LicenseKey;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class LicenseKeyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return LicenseKey::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('product'),
            TextField::new('license_key', 'License Key'),
            ChoiceField::new('status')->setChoices(LicenseKey::statusChoices()),
            TextField::new('assigned_to_email', 'Assigned To')->setRequired(false),
            DateTimeField::new('assigned_at', 'Assigned At')->setRequired(false),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('License Key')
            ->setEntityLabelInPlural('License Keys')
            ->setPageTitle(Crud::PAGE_INDEX, 'License Keys')
            ->setDefaultSort(['id' => 'DESC']);
    }
}

