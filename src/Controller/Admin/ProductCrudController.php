<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use App\Entity\StockHistory;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Security\Core\Security;

class ProductCrudController extends AbstractCrudController
{
    public function __construct(
        private readonly Security $security
    ) {
    }

    public static function getEntityFqcn(): string
    {
        return Product::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            AssociationField::new('category')
                ->setFormTypeOption('placeholder', 'Select option'),
            TextEditorField::new('description'),
            MoneyField::new('price')->setCurrency('USD'),
            MoneyField::new('old_price')->setCurrency('USD')->setRequired(false),
            NumberField::new('stock'),
            ChoiceField::new('tax_class', 'Tax Class')
                ->setChoices([
                    'Standard' => 'standard',
                    'Reduced' => 'reduced',
                    'Zero' => 'zero',
                    'Exempt' => 'exempt',
                ]),
            AssociationField::new('vendor')
                ->setRequired(false)
                ->setFormTypeOption('placeholder', 'Select option'),
            TextField::new('supplier_reference')->setRequired(false)->setHelp('Vendor/Supplier SKU or reference code'),
            BooleanField::new('is_subscription', 'Subscription Product'),
            ChoiceField::new('subscription_interval', 'Subscription Interval')
                ->setChoices([
                    'Monthly' => 'monthly',
                    'Quarterly' => 'quarterly',
                    'Yearly' => 'yearly',
                ])
                ->setRequired(false),
            MoneyField::new('subscription_price', 'Subscription Price')->setCurrency('USD')->setRequired(false),
            BooleanField::new('is_digital', 'Digital Product'),
            TextField::new('digital_download_url', 'Download URL')->setRequired(false),
            BooleanField::new('license_key_required', 'License Key Required'),
            BooleanField::new('is_sale'),
            BooleanField::new('is_featured'),
            ImageField::new('image')
                ->setUploadDir('public/uploads/products')
                ->setBasePath('uploads/products')
                ->setUploadedFileNamePattern('[slug]-[timestamp].[extension]')
                ->setRequired(false),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Product')
            ->setEntityLabelInPlural('Products')
            ->setPageTitle(Crud::PAGE_INDEX, 'Products List')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields([
                'id',
                'name',
                'description',
                'price',
                'old_price',
                'stock',
                'tax_class',
                'supplier_reference',
                'subscription_interval',
                'digital_download_url',
                'category.name',
                'vendor.name',
            ])
            ->setPaginatorPageSize(20);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, static fn (Action $action) => $action->setLabel('Add Product')->setIcon('fas fa-plus'))
            ->add(Crud::PAGE_INDEX, Action::DETAIL);
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Product) {
            parent::persistEntity($entityManager, $entityInstance);

            return;
        }

        parent::persistEntity($entityManager, $entityInstance);
        $this->logStockChange($entityManager, $entityInstance, 0, (int) $entityInstance->getStock(), 'Initial stock set');
        $entityManager->flush();
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof Product) {
            parent::updateEntity($entityManager, $entityInstance);

            return;
        }

        $originalData = $entityManager->getUnitOfWork()->getOriginalEntityData($entityInstance);
        $previousStock = (int) ($originalData['stock'] ?? $entityInstance->getStock());

        parent::updateEntity($entityManager, $entityInstance);

        $newStock = (int) $entityInstance->getStock();
        if ($newStock !== $previousStock) {
            $this->logStockChange($entityManager, $entityInstance, $previousStock, $newStock, 'Stock updated from product form');
            $entityManager->flush();
        }
    }

    private function logStockChange(EntityManagerInterface $entityManager, Product $product, int $previous, int $new, string $note): void
    {
        $history = new StockHistory();
        $history->setProduct($product);
        $history->setPreviousStock($previous);
        $history->setNewStock($new);
        $history->setChangeAmount($new - $previous);
        $history->setNote($note);

        $user = $this->security->getUser();
        if ($user !== null && method_exists($user, 'getUserIdentifier')) {
            $history->setChangedBy((string) $user->getUserIdentifier());
        }

        $entityManager->persist($history);
    }
}
