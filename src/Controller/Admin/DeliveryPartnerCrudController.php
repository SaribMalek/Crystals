<?php

namespace App\Controller\Admin;

use App\Entity\DeliveryPartner;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class DeliveryPartnerCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return DeliveryPartner::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            TextField::new('tracking_url_template')->setRequired(false)->setHelp('Use {tracking_id} placeholder in URL'),
            TextField::new('support_contact')->setRequired(false),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Delivery Partner')
            ->setEntityLabelInPlural('Delivery Partners')
            ->setPageTitle(Crud::PAGE_INDEX, 'Delivery Partners')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'name', 'support_contact', 'tracking_url_template']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
