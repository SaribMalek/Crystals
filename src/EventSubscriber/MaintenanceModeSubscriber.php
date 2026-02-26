<?php

namespace App\EventSubscriber;

use App\Repository\SiteSettingRepository;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Twig\Environment;

class MaintenanceModeSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly SiteSettingRepository $siteSettingRepository,
        private readonly Environment $twig
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => ['onKernelRequest', 20],
        ];
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        if (!$event->isMainRequest()) {
            return;
        }

        $request = $event->getRequest();
        $path = $request->getPathInfo();

        if (str_starts_with($path, '/admin') || str_starts_with($path, '/_profiler') || str_starts_with($path, '/_wdt')) {
            return;
        }

        if (preg_match('/\.(css|js|map|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot)$/i', $path) === 1) {
            return;
        }

        $settings = $this->siteSettingRepository->findCurrent();
        if ($settings === null || !$settings->isMaintenanceMode()) {
            return;
        }

        $content = $this->twig->render('maintenance_mode.html.twig', [
            'site_name' => $settings->getSiteName(),
            'site_logo' => $settings->getSiteLogo(),
        ]);

        $event->setResponse(new Response($content, Response::HTTP_SERVICE_UNAVAILABLE));
    }
}

