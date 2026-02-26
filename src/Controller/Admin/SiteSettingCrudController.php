<?php

namespace App\Controller\Admin;

use App\Entity\SiteSetting;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class SiteSettingCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return SiteSetting::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('site_name', 'Site Name'),
            ImageField::new('site_logo', 'Site Logo')
                ->setUploadDir('public/uploads/site')
                ->setBasePath('uploads/site')
                ->setUploadedFileNamePattern('site-logo-[timestamp]-[randomhash].[extension]')
                ->setRequired(false),
            ImageField::new('favicon', 'Favicon')
                ->setUploadDir('public/uploads/site')
                ->setBasePath('uploads/site')
                ->setUploadedFileNamePattern('favicon-[timestamp]-[randomhash].[extension]')
                ->setRequired(false),
            ChoiceField::new('currency', 'Currency')
                ->setChoices(SiteSetting::currencyChoices()),
            ChoiceField::new('timezone', 'Timezone')
                ->setChoices(array_combine(\DateTimeZone::listIdentifiers(), \DateTimeZone::listIdentifiers()) ?: ['UTC' => 'UTC']),
            ChoiceField::new('language', 'Language')
                ->setChoices(SiteSetting::languageChoices()),
            BooleanField::new('maintenance_mode', 'Maintenance Mode'),
            TextareaField::new('email_template_order', 'Email Template: Order Confirmation')
                ->setHelp('Available variables: {{customer_name}}, {{order_id}}, {{tracking_url}}')
                ->setNumOfRows(6)
                ->setRequired(false),
            TextareaField::new('email_template_support', 'Email Template: Support Auto Reply')
                ->setHelp('Available variables: {{customer_name}}, {{ticket_id}}')
                ->setNumOfRows(6)
                ->setRequired(false),
            TextareaField::new('sms_template_order', 'SMS Template: Order Update')
                ->setHelp('Available variables: {{order_id}}, {{tracking_url}}')
                ->setNumOfRows(3)
                ->setRequired(false),
            TextareaField::new('sms_template_otp', 'SMS Template: OTP')
                ->setHelp('Available variables: {{otp}}')
                ->setNumOfRows(3)
                ->setRequired(false),
            DateTimeField::new('updated_at', 'Updated')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Site Settings')
            ->setEntityLabelInPlural('Site Settings')
            ->setPageTitle(Crud::PAGE_INDEX, 'Site Settings')
            ->setPageTitle(Crud::PAGE_EDIT, 'Edit Site Settings')
            ->setEntityPermission('ROLE_MANAGER')
            ->setDefaultSort(['id' => 'ASC']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::DELETE, Action::NEW);
    }
}

