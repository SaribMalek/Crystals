<?php

namespace App\Controller\Admin;

use App\Entity\ApiKey;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ApiKeyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ApiKey::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            TextField::new('key_value', 'API Key')->setHelp('Leave blank on create to auto-generate a secure key.'),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('last_used_at', 'Last Used')->hideOnForm(),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('API Key')
            ->setEntityLabelInPlural('API Keys')
            ->setEntityPermission('ROLE_SUPER_ADMIN')
            ->setPageTitle(Crud::PAGE_INDEX, 'API Keys Management')
            ->setDefaultSort(['id' => 'DESC']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance instanceof ApiKey && ((string) $entityInstance->getKeyValue()) === '') {
            $generated = 'ak_'.bin2hex(random_bytes(24));
            $entityInstance->setKeyValue($generated);
            $this->addFlash('success', 'New API key generated: '.$generated);
        }

        parent::persistEntity($entityManager, $entityInstance);
    }
}

