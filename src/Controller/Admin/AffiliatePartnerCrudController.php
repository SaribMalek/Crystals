<?php

namespace App\Controller\Admin;

use App\Entity\AffiliatePartner;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AffiliatePartnerCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AffiliatePartner::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            TextField::new('email'),
            TextField::new('affiliate_code', 'Affiliate Code'),
            NumberField::new('commission_rate', 'Commission %')->setNumDecimals(2),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Affiliate Partner')
            ->setEntityLabelInPlural('Affiliate Partners')
            ->setPageTitle(Crud::PAGE_INDEX, 'Affiliate System')
            ->setDefaultSort(['id' => 'DESC']);
    }
}

