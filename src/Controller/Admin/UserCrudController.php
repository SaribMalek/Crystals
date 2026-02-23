<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserCrudController extends AbstractCrudController
{
    public function __construct(private readonly UserPasswordHasherInterface $passwordHasher)
    {
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $password = TextField::new('plainPassword', 'Password')
            ->setFormType(PasswordType::class)
            ->setHelp('For edit: leave blank to keep current password.')
            ->onlyOnForms();

        $rolesDisplay = TextField::new('rolesDisplay', 'Roles')
            ->onlyOnIndex()
            ->renderAsHtml()
            ->formatValue(function (string $value): string {
                $roles = array_filter(array_map('trim', explode(',', $value)));
                $badges = array_map(
                    static fn (string $role): string => sprintf('<span class="user-role-pill">%s</span>', htmlspecialchars($role, ENT_QUOTES)),
                    $roles
                );

                return implode('', $badges);
            });

        if ($pageName === Crud::PAGE_NEW) {
            $password->setRequired(true);
        } else {
            $password->setRequired(false);
        }

        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('email'),
            TextField::new('full_name', 'Name')->setRequired(false),
            ImageField::new('profile_image', 'Profile Image')
                ->setUploadDir('public/uploads/profiles')
                ->setBasePath('uploads/profiles')
                ->setUploadedFileNamePattern('admin-[timestamp]-[randomhash].[extension]')
                ->setRequired(false),
            $rolesDisplay,
            ArrayField::new('roles')
                ->onlyOnForms()
                ->setHelp('Example: ROLE_ADMIN, ROLE_EDITOR'),
            $password,
            DateTimeField::new('created_at', 'Created')->hideOnForm(),
        ];
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('User')
            ->setEntityLabelInPlural('Users')
            ->setPageTitle(Crud::PAGE_INDEX, 'Users')
            ->setPageTitle(Crud::PAGE_NEW, 'Create Admin User')
            ->setPageTitle(Crud::PAGE_EDIT, 'Edit Admin User')
            ->setDefaultSort(['id' => 'DESC'])
            ->setSearchFields(['id', 'email', 'roles'])
            ->setPaginatorPageSize(20);
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, static fn (Action $action) => $action->setLabel('Add User')->setIcon('fas fa-user-plus'))
            ->update(Crud::PAGE_INDEX, Action::EDIT, static fn (Action $action) => $action->setLabel('Edit')->setIcon('fas fa-edit'))
            ->update(Crud::PAGE_INDEX, Action::DELETE, static fn (Action $action) => $action->setLabel('Delete')->setIcon('fas fa-trash'))
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->update(Crud::PAGE_DETAIL, Action::EDIT, static fn (Action $action) => $action->setLabel('Edit')->setIcon('fas fa-edit'))
            ->update(Crud::PAGE_DETAIL, Action::DELETE, static fn (Action $action) => $action->setLabel('Delete')->setIcon('fas fa-trash'));
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof User) {
            parent::persistEntity($entityManager, $entityInstance);

            return;
        }

        $this->hashPasswordIfNeeded($entityInstance, true);
        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof User) {
            parent::updateEntity($entityManager, $entityInstance);

            return;
        }

        $this->hashPasswordIfNeeded($entityInstance, false);
        parent::updateEntity($entityManager, $entityInstance);
    }

    private function hashPasswordIfNeeded(User $user, bool $requirePassword): void
    {
        $plainPassword = (string) ($user->getPlainPassword() ?? '');

        if ($plainPassword === '') {
            if ($requirePassword) {
                throw new \RuntimeException('Password is required.');
            }

            return;
        }

        $user->setPassword($this->passwordHasher->hashPassword($user, $plainPassword));
        $user->eraseCredentials();
    }
}
