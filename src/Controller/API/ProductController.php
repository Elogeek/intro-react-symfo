<?php

namespace App\Controller\API;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController {

    private ProductRepository $productRepository;

    public function __construct(ProductRepository $productRepository) {
        $this->productRepository = $productRepository;
    }

    #[Route('/api/products', name: 'api_products')]
    public function index(): JsonResponse {
        return $this->json(
            $this->productRepository->findAll(),
        );
    }

    #[Route('/api/product/stock', name: 'api-product_stock', methods: ['POST'])]
    public function getStock(Request $request): JsonResponse {
        $playload = json_decode($request->getContent(), true);
        if(isset($playload['product_id'])) {
            $product = $this->productRepository->find($playload['product_id']);
            return $this->json([
                'product_id' => $product->getId(),
                'stock' => $product->getStock(),
            ]);
        }

        return $this->json([
            'error' => true,
            'message' => 'Product not found',
        ]);
    }
}
