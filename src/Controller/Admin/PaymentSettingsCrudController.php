<?php

namespace App\Controller\Admin;

use App\Entity\PaymentSettings;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

class PaymentSettingsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PaymentSettings::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            BooleanField::new('gateway_stripe_enabled', 'Stripe'),
            BooleanField::new('gateway_razorpay_enabled', 'Razorpay'),
            BooleanField::new('gateway_paypal_enabled', 'PayPal'),
            BooleanField::new('method_card_enabled', 'Card'),
            BooleanField::new('method_upi_enabled', 'UPI'),
            BooleanField::new('method_net_banking_enabled', 'Net Banking'),
            BooleanField::new('method_wallet_enabled', 'Wallets'),
            ChoiceField::new('mode', 'Mode')->setChoices(PaymentSettings::modeChoices()),
            BooleanField::new('refunds_enabled', 'Refunds Enabled'),
            MoneyField::new('max_auto_refund_amount', 'Max Auto Refund Amount')->setCurrency('USD'),
            TextareaField::new('refund_policy_note', 'Refund Policy')->setRequired(false),
            DateTimeField::new('updated_at', 'Updated')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Payment Settings')
            ->setEntityLabelInPlural('Payment Settings')
            ->setPageTitle(Crud::PAGE_INDEX, 'Payment Gateway Settings')
            ->setPageTitle(Crud::PAGE_EDIT, 'Edit Payment Settings')
            ->setDefaultSort(['id' => 'ASC']);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::DELETE)
            ->update(Crud::PAGE_INDEX, Action::EDIT, static fn (Action $action) => $action->setLabel('Edit Settings')->setIcon('fas fa-cogs'));
    }
}
