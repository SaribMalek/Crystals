<?php

namespace App\EventSubscriber;

use App\Entity\AdminLoginHistory;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Http\Event\LoginSuccessEvent;

class AdminLoginSubscriber implements EventSubscriberInterface
{
    public function __construct(private readonly EntityManagerInterface $entityManager)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            LoginSuccessEvent::class => 'onLoginSuccess',
        ];
    }

    public function onLoginSuccess(LoginSuccessEvent $event): void
    {
        $user = $event->getUser();
        if (!$user instanceof User) {
            return;
        }

        $request = $event->getRequest();
        if (!str_starts_with($request->getPathInfo(), '/admin')) {
            return;
        }

        $entry = (new AdminLoginHistory())
            ->setUser($user)
            ->setEmail((string) $user->getEmail())
            ->setIpAddress($request->getClientIp())
            ->setUserAgent($request->headers->get('User-Agent'));

        $this->entityManager->persist($entry);
        $this->entityManager->flush();
    }
}

