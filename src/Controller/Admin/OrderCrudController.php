<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class OrderCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Order::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $statusField = ChoiceField::new('status')
            ->setChoices(Order::statusChoices())
            ->renderExpanded(false);

        return [
            IdField::new('id')->hideOnForm(),
            EmailField::new('customer_email'),
            MoneyField::new('total_amount')->setCurrency('USD'),
            MoneyField::new('shipping_amount')->setCurrency('USD')->setHelp('Shipping charge applied to order'),
            MoneyField::new('discount_amount')->setCurrency('USD')->setHelp('Coupon/discount amount'),
            MoneyField::new('tax_amount')->setCurrency('USD')->setHelp('GST/VAT amount'),
            MoneyField::new('refunded_amount')->setCurrency('USD')->setHelp('Set partial refund amount when needed.'),
            $statusField,
            TextField::new('coupon_code')->setRequired(false),
            TextField::new('shipping_method')->setRequired(false),
            TextField::new('tracking_id')->setRequired(false),
            TextField::new('payment_method')->setRequired(false),
            TextareaField::new('shipping_address')->setRequired(false),
            TextareaField::new('internal_note')->setRequired(false)->setHelp('Internal notes only, not visible to customers.'),
            DateTimeField::new('created_at')->hideOnForm(),
            CollectionField::new('orderItems')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Order')
            ->setEntityLabelInPlural('Orders')
            ->setPageTitle(Crud::PAGE_INDEX, 'Orders List')
            ->setDefaultSort(['created_at' => 'DESC'])
            ->setSearchFields(['id', 'customer_email', 'status', 'total_amount', 'shipping_amount', 'discount_amount', 'tax_amount', 'coupon_code', 'shipping_method', 'tracking_id', 'payment_method', 'shipping_address', 'internal_note', 'orderItems.product.name'])
            ->setPaginatorPageSize(25);
    }

    public function configureActions(Actions $actions): Actions
    {
        $invoiceAction = Action::new('invoicePdf', 'Invoice PDF', 'fas fa-file-invoice')
            ->linkToRoute('admin_order_invoice_pdf', static fn (Order $order): array => ['id' => $order->getId()])
            ->setHtmlAttributes(['target' => '_blank']);

        $packingSlipAction = Action::new('packingSlipPdf', 'Packing Slip PDF', 'fas fa-file-pdf')
            ->linkToRoute('admin_order_packing_slip_pdf', static fn (Order $order): array => ['id' => $order->getId()])
            ->setHtmlAttributes(['target' => '_blank']);

        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, static fn (Action $action) => $action->setLabel('Add Order')->setIcon('fas fa-plus'))
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->add(Crud::PAGE_INDEX, $invoiceAction)
            ->add(Crud::PAGE_INDEX, $packingSlipAction)
            ->add(Crud::PAGE_DETAIL, $invoiceAction)
            ->add(Crud::PAGE_DETAIL, $packingSlipAction);
    }
}
