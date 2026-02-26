<?php

namespace App\Controller\Admin;

use App\Entity\Announcement;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AnnouncementCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Announcement::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('title'),
            TextareaField::new('message'),
            TextField::new('link_url', 'Link URL')->setRequired(false),
            BooleanField::new('open_in_new_tab', 'Open in New Tab'),
            TextField::new('background_color', 'Background Color')->setHelp('Use hex color like #0f4c81.'),
            TextField::new('text_color', 'Text Color')->setHelp('Use hex color like #ffffff.'),
            IntegerField::new('sort_order', 'Sort Order'),
            BooleanField::new('is_active', 'Active'),
            DateTimeField::new('starts_at', 'Starts At')->setRequired(false),
            DateTimeField::new('ends_at', 'Ends At')->setRequired(false),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Announcement')
            ->setEntityLabelInPlural('Announcements')
            ->setPageTitle(Crud::PAGE_INDEX, 'Announcements')
            ->setDefaultSort(['sort_order' => 'ASC', 'id' => 'DESC']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }
}
