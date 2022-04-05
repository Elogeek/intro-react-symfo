<?php

namespace App\Service;

use App\Entity\Cart;
use App\Repository\CartRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class SessionCartService {

    private SessionInterface $session;
    private CartRepository $cartRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(RequestStack $requestStack, CartRepository $cartRepository, EntityManagerInterface $entityManager) {
        $this->session = $requestStack->getCurrentRequest()->getSession();
        $this->cartRepository = $cartRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @return Cart
     */
    public function getCart(): Cart
    {
        $cartId = $this->session->get('cart_id');
        // If cart no exist, alors on le crée
        if (!$cartId) {
            $cart = new Cart();
            $this->entityManager->persist($cart);
            $this->entityManager->flush();
            // on stocke son id en session
            $this->setCartID($cart);
        }
        else {
            $cart = $this->cartRepository->find($cartId);
        }

        return $cart;
    }

    /**
     * Set the session Cart
     * @param Cart $cart
     * @return void
     */
    public function setCartID(Cart $cart): void
    {
        $this->session->set('cart_id', $cart->getId());
    }
}
