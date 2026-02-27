<?php

namespace App\Controller\Admin;

use App\Entity\BlogPost;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class BlogPostCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return BlogPost::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $contentEditor = TextEditorField::new('content')->onlyOnForms();
        $contentDetail = TextField::new('content')
            ->onlyOnDetail()
            ->renderAsHtml();

        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('title'),
            TextField::new('slug'),
            TextField::new('author')->setRequired(false),
            TextField::new('excerpt')->setRequired(false),
            ImageField::new('featured_image')
                ->setUploadDir('public/uploads/blog')
                ->setBasePath('uploads/blog')
                ->setRequired(false),
            $contentEditor,
            $contentDetail,
            ChoiceField::new('status')->setChoices(BlogPost::statusChoices()),
            DateTimeField::new('published_at')->setRequired(false),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
            DateTimeField::new('updated_at', 'Updated')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Blog Post')
            ->setEntityLabelInPlural('Blog Posts')
            ->setPageTitle(Crud::PAGE_INDEX, 'Blog Posts')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'title', 'slug', 'author', 'status', 'excerpt', 'content']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions->add(Crud::PAGE_INDEX, Action::DETAIL);
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance instanceof BlogPost) {
            $entityInstance->setUpdatedAt(new \DateTimeImmutable());
            if ($entityInstance->getStatus() === BlogPost::STATUS_PUBLISHED && $entityInstance->getPublishedAt() === null) {
                $entityInstance->setPublishedAt(new \DateTimeImmutable());
            }
        }

        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance instanceof BlogPost) {
            $entityInstance->setUpdatedAt(new \DateTimeImmutable());
            if ($entityInstance->getStatus() === BlogPost::STATUS_PUBLISHED && $entityInstance->getPublishedAt() === null) {
                $entityInstance->setPublishedAt(new \DateTimeImmutable());
            }
        }

        parent::updateEntity($entityManager, $entityInstance);
    }
}
