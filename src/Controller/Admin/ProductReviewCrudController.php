<?php

namespace App\Controller\Admin;

use App\Entity\ProductReview;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ProductReviewCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ProductReview::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('product')
                ->setFormTypeOption('placeholder', 'Select option'),
            TextField::new('customer_name')->setRequired(false),
            EmailField::new('customer_email')->setRequired(false),
            IntegerField::new('rating'),
            TextField::new('title')->setRequired(false),
            TextareaField::new('review_text'),
            ChoiceField::new('status')->setChoices(ProductReview::statusChoices())->renderAsBadges([
                ProductReview::STATUS_APPROVED => 'success',
                ProductReview::STATUS_PENDING => 'warning',
                ProductReview::STATUS_REJECTED => 'danger',
                ProductReview::STATUS_SPAM => 'danger',
            ]),
            BooleanField::new('is_spam', 'Spam'),
            TextareaField::new('admin_reply')->setRequired(false)->setHelp('Admin reply to customer review'),
            TextareaField::new('moderation_note')->setRequired(false),
            TextField::new('moderated_by')->setRequired(false)->hideOnIndex(),
            DateTimeField::new('moderated_at')->setRequired(false)->hideOnIndex(),
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
            DateTimeField::new('updated_at', 'Updated')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Review')
            ->setEntityLabelInPlural('Reviews & Ratings')
            ->setPageTitle(Crud::PAGE_INDEX, 'Review Moderation')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'product.name', 'customer_name', 'customer_email', 'title', 'review_text', 'status']);
    }

    public function configureActions(Actions $actions): Actions
    {
        $approve = Action::new('approveReview', 'Approve', 'fas fa-check')
            ->linkToRoute('admin_review_approve', static fn (ProductReview $review): array => ['id' => $review->getId()]);
        $reject = Action::new('rejectReview', 'Reject', 'fas fa-times')
            ->linkToRoute('admin_review_reject', static fn (ProductReview $review): array => ['id' => $review->getId()]);
        $spam = Action::new('markSpamReview', 'Spam', 'fas fa-ban')
            ->linkToRoute('admin_review_mark_spam', static fn (ProductReview $review): array => ['id' => $review->getId()])
            ->setCssClass('text-danger');

        return $actions
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->add(Crud::PAGE_INDEX, $approve)
            ->add(Crud::PAGE_INDEX, $reject)
            ->add(Crud::PAGE_INDEX, $spam)
            ->add(Crud::PAGE_DETAIL, $approve)
            ->add(Crud::PAGE_DETAIL, $reject)
            ->add(Crud::PAGE_DETAIL, $spam);
    }
}
