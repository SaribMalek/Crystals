<?php

namespace App\Command;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:user:create-admin',
    description: 'Create or update an admin user with email and password.',
)]
class CreateAdminUserCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly UserRepository $userRepository,
        private readonly UserPasswordHasherInterface $passwordHasher
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('email', null, InputOption::VALUE_REQUIRED, 'User email')
            ->addOption('password', null, InputOption::VALUE_REQUIRED, 'User password')
            ->addOption('role', null, InputOption::VALUE_OPTIONAL, 'Primary role', 'ROLE_ADMIN');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $email = mb_strtolower(trim((string) $input->getOption('email')));
        $password = (string) $input->getOption('password');
        $role = strtoupper(trim((string) $input->getOption('role')));

        if ($email === '') {
            $io->error('Missing required option: --email');

            return Command::INVALID;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $io->error('Invalid email format.');

            return Command::INVALID;
        }

        if ($password === '') {
            $io->error('Missing required option: --password');

            return Command::INVALID;
        }

        if (mb_strlen($password) < 8) {
            $io->error('Password must be at least 8 characters.');

            return Command::INVALID;
        }

        if ($role === '' || !str_starts_with($role, 'ROLE_')) {
            $role = 'ROLE_ADMIN';
        }

        $user = $this->userRepository->findOneBy(['email' => $email]);
        $isNew = false;

        if (!$user instanceof User) {
            $user = new User();
            $user->setEmail($email);
            $isNew = true;
        }

        $user->setRoles(array_values(array_unique([$role, 'ROLE_ADMIN'])));
        $user->setPassword($this->passwordHasher->hashPassword($user, $password));
        $user->eraseCredentials();

        if ($isNew) {
            $this->entityManager->persist($user);
        }

        $this->entityManager->flush();

        $io->success(sprintf(
            '%s user: %s',
            $isNew ? 'Created' : 'Updated',
            $email
        ));

        return Command::SUCCESS;
    }
}
