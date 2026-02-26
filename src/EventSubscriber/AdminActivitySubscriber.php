<?php

namespace App\EventSubscriber;

use App\Entity\AdminActivityLog;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\TerminateEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Security;

class AdminActivitySubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly Security $security,
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::TERMINATE => 'onKernelTerminate',
        ];
    }

    public function onKernelTerminate(TerminateEvent $event): void
    {
        $request = $event->getRequest();
        $path = $request->getPathInfo();
        if (!str_starts_with($path, '/admin')) {
            return;
        }

        if ($path === '/admin/login' || $path === '/admin/logout') {
            return;
        }

        $user = $this->security->getUser();
        if (!$user instanceof User) {
            return;
        }

        $route = (string) ($request->attributes->get('_route') ?? '');
        if ($route !== '' && str_starts_with($route, '_')) {
            return;
        }

        $activity = (new AdminActivityLog())
            ->setUser($user)
            ->setEmail((string) $user->getEmail())
            ->setRouteName($route !== '' ? $route : null)
            ->setHttpMethod($request->getMethod())
            ->setPath($path)
            ->setIpAddress($request->getClientIp())
            ->setUserAgent($request->headers->get('User-Agent'))
            ->setActivityType($this->resolveActivityType($request));

        $this->entityManager->persist($activity);
        $this->entityManager->flush();
    }

    private function resolveActivityType(Request $request): ?string
    {
        $eaAction = $request->query->get('action');
        if (is_string($eaAction) && $eaAction !== '') {
            return 'easyadmin_'.strtolower($eaAction);
        }

        $method = strtoupper((string) $request->getMethod());
        return match ($method) {
            'POST' => 'write',
            'PUT', 'PATCH' => 'update',
            'DELETE' => 'delete',
            default => 'read',
        };
    }
}
