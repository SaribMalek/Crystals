<?php

namespace App\Controller\Admin;

use App\Entity\Vendor;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class VendorCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Vendor::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            TextField::new('company_name', 'Company')->setRequired(false),
            TextField::new('email')->setRequired(false),
            TextField::new('phone')->setRequired(false),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Vendor')
            ->setEntityLabelInPlural('Vendors')
            ->setPageTitle(Crud::PAGE_INDEX, 'Multi-Vendor Support')
            ->setDefaultSort(['id' => 'DESC']);
    }
}

