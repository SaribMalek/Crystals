<?php

namespace App\Controller\Admin;

use App\Entity\Customer;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CustomerCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Customer::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            EmailField::new('email'),
            TextField::new('full_name', 'Full Name')->setRequired(false),
            TextField::new('phone')->setRequired(false),
            ChoiceField::new('account_status', 'Account Status')
                ->setChoices(Customer::statusChoices())
                ->renderAsBadges([
                    Customer::STATUS_ACTIVE => 'success',
                    Customer::STATUS_BLOCKED => 'danger',
                ]),
            ChoiceField::new('customer_group', 'Customer Group')
                ->setChoices(Customer::groupChoices()),
            TextEditorField::new('billing_address')->setRequired(false)->hideOnIndex(),
            TextEditorField::new('shipping_address')->setRequired(false)->hideOnIndex(),
            TextField::new('password_hash', 'Password Hash')->hideOnIndex()->setRequired(false)->setHelp('Managed by "Manual Password Reset" action.'),
            ImageField::new('profile_image', 'Profile Image')
                ->setUploadDir('public/uploads/customers')
                ->setBasePath('uploads/customers')
                ->setUploadedFileNamePattern('customer-[timestamp]-[randomhash].[extension]')
                ->setRequired(false),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
            DateTimeField::new('updated_at', 'Updated')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Customer')
            ->setEntityLabelInPlural('Customers')
            ->setPageTitle(Crud::PAGE_INDEX, 'Customer List')
            ->setPageTitle(Crud::PAGE_DETAIL, 'Customer Profile')
            ->setPageTitle(Crud::PAGE_EDIT, 'Edit Customer')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'email', 'full_name', 'phone', 'account_status', 'customer_group']);
    }

    public function configureActions(Actions $actions): Actions
    {
        $orderHistory = Action::new('orderHistory', 'Order History', 'fas fa-shopping-bag')
            ->linkToRoute('admin_customer_orders', static fn (Customer $customer) => ['id' => $customer->getId()]);

        $passwordReset = Action::new('manualPasswordReset', 'Reset Password', 'fas fa-key')
            ->linkToRoute('admin_customer_password_reset', static fn (Customer $customer) => ['id' => $customer->getId()]);

        $gdprExport = Action::new('gdprExport', 'Export GDPR', 'fas fa-file-export')
            ->linkToRoute('admin_customer_export', static fn (Customer $customer) => ['id' => $customer->getId()]);

        $gdprDelete = Action::new('gdprDelete', 'GDPR Delete', 'fas fa-user-slash')
            ->setCssClass('text-danger')
            ->linkToRoute('admin_customer_gdpr_delete', static fn (Customer $customer) => ['id' => $customer->getId()]);

        return $actions
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->add(Crud::PAGE_INDEX, $orderHistory)
            ->add(Crud::PAGE_INDEX, $passwordReset)
            ->add(Crud::PAGE_INDEX, $gdprExport)
            ->add(Crud::PAGE_INDEX, $gdprDelete)
            ->add(Crud::PAGE_DETAIL, $orderHistory)
            ->add(Crud::PAGE_DETAIL, $passwordReset)
            ->add(Crud::PAGE_DETAIL, $gdprExport)
            ->add(Crud::PAGE_DETAIL, $gdprDelete);
    }
}
