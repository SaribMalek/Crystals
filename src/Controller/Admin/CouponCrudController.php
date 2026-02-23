<?php

namespace App\Controller\Admin;

use App\Entity\Coupon;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CouponCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Coupon::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('code', 'Coupon Code'),
            ChoiceField::new('discount_type')->setChoices(Coupon::discountTypeChoices()),
            MoneyField::new('discount_value')->setCurrency('USD'),
            DateTimeField::new('expiry_date')->setRequired(false),
            MoneyField::new('minimum_cart_value')->setCurrency('USD'),
            EmailField::new('user_email')->setRequired(false)->setHelp('Leave blank for all users'),
            IntegerField::new('usage_limit')->setRequired(false),
            IntegerField::new('usage_count')->setRequired(false),
            BooleanField::new('auto_apply', 'Auto-apply'),
            BooleanField::new('festival_sale_rule', 'Festival/Sale Rule'),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Coupon')
            ->setEntityLabelInPlural('Coupon Codes')
            ->setPageTitle(Crud::PAGE_INDEX, 'Coupon Management')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'code', 'discount_type', 'user_email']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
