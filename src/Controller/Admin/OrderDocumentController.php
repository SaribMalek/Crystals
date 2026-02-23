<?php

namespace App\Controller\Admin;

use App\Entity\Order;
use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderDocumentController extends AbstractController
{
    #[Route('/admin/order/{id}/invoice.pdf', name: 'admin_order_invoice_pdf', methods: ['GET'])]
    public function invoice(Order $order): Response
    {
        return $this->renderPdf(
            $this->renderView('admin/order_invoice_pdf.html.twig', ['order' => $order]),
            sprintf('invoice-order-%d.pdf', $order->getId())
        );
    }

    #[Route('/admin/order/{id}/packing-slip.pdf', name: 'admin_order_packing_slip_pdf', methods: ['GET'])]
    public function packingSlip(Order $order): Response
    {
        return $this->renderPdf(
            $this->renderView('admin/order_packing_slip_pdf.html.twig', ['order' => $order]),
            sprintf('packing-slip-order-%d.pdf', $order->getId())
        );
    }

    private function renderPdf(string $html, string $filename): Response
    {
        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4');
        $dompdf->render();

        return new Response($dompdf->output(), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => sprintf('attachment; filename="%s"', $filename),
        ]);
    }
}
