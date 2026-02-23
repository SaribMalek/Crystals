<?php

namespace App\Controller\Admin;

use App\Entity\TaxRule;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class TaxRuleCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return TaxRule::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            ChoiceField::new('tax_type')->setChoices(TaxRule::taxTypeChoices()),
            TextField::new('country'),
            TextField::new('state')->setRequired(false),
            ChoiceField::new('product_tax_class')->setChoices(TaxRule::productTaxClassChoices()),
            NumberField::new('rate')->setNumDecimals(2)->setHelp('Tax percentage rate'),
            BooleanField::new('is_inclusive', 'Inclusive Tax'),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Tax Rule')
            ->setEntityLabelInPlural('Tax Rules')
            ->setPageTitle(Crud::PAGE_INDEX, 'Tax Rules (GST / VAT)')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'name', 'tax_type', 'country', 'state', 'product_tax_class', 'rate']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
