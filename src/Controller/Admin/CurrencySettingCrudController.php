<?php

namespace App\Controller\Admin;

use App\Entity\CurrencySetting;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CurrencySettingCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CurrencySetting::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('code'),
            TextField::new('symbol'),
            NumberField::new('exchange_rate', 'Exchange Rate')->setNumDecimals(6),
            BooleanField::new('is_default', 'Default'),
            BooleanField::new('is_active', 'Active'),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Currency')
            ->setEntityLabelInPlural('Currencies')
            ->setPageTitle(Crud::PAGE_INDEX, 'Multi-Currency')
            ->setDefaultSort(['id' => 'ASC']);
    }
}

