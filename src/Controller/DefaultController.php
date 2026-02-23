<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'home', requirements: ['reactRouting' => '^(?!api|admin|uploads|css|js|assets|_wdt|_profiler|favicon\.ico).+'], defaults: ['reactRouting' => null])]
    public function index(): Response
    {
        $entryScript = null;
        $entryStyles = [];
        $manifestPath = $this->getParameter('kernel.project_dir').'/public/assets/frontend/.vite/manifest.json';

        if (is_file($manifestPath)) {
            $manifest = json_decode((string) file_get_contents($manifestPath), true);
            $entry = $manifest['src/main.jsx'] ?? null;

            if (is_array($entry)) {
                $entryScript = isset($entry['file']) ? '/assets/frontend/'.$entry['file'] : null;

                foreach (($entry['css'] ?? []) as $cssFile) {
                    $entryStyles[] = '/assets/frontend/'.$cssFile;
                }
            }
        }

        return $this->render('base.html.twig', [
            'entry_script' => $entryScript,
            'entry_styles' => $entryStyles,
        ]);
    }
}
