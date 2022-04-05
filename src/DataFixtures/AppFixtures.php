<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Product;
use App\Repository\CategoryRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    private CategoryRepository $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository) {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Adding some categories
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager): void
    {
        foreach (['Software', 'Hardware', 'Autres'] as $categoryName) {
            $category = (new Category())
                ->setName($categoryName)
                ;
            $manager->persist($category);
        }
        $manager->flush();

        /**
         * Adding some products
         */
        $cart2 = $this->categoryRepository->find(10);
        $products = [
            (new Product())
                ->setCategory($cart2)
                ->setName('Ecran')
                ->setDescription('lorem lorem')
                ->setPrice(59.99)
                ->setStock(20)
                ->setImage('image1.png')
            ,
            (new Product())
                ->setCategory($cart2)
                ->setName('Ecran')
                ->setDescription('lorem lorem')
                ->setPrice(59.99)
                ->setStock(20)
                ->setImage('image1.png')
            ,
            (new Product())
                ->setCategory($cart2)
                ->setName('PC Portable')
                ->setDescription('super text')
                ->setPrice(599.99)
                ->setStock(10)
                ->setImage('image2.png')
            ,
            (new Product())
                ->setCategory($cart2)
                ->setName('Ecran')
                ->setDescription('super écran plat')
                ->setPrice(999.99)
                ->setStock(0)
                ->setImage('image1.png')
            ,
            (new Product())
                ->setCategory($cart2)
                ->setName('Jeux PC')
                ->setDescription('jeux Mario Kart')
                ->setPrice(79.99)
                ->setStock(50)
                ->setImage('image3.png')
            ,
            (new Product())
                ->setCategory($this->categoryRepository->find(11))
                ->setName('Biscuits')
                ->setDescription('Kit Kat au thé matcha')
                ->setPrice(1.99)
                ->setStock(100)
                ->setImage('image4.png')
            ,
            (new Product())
                ->setCategory($cart2)
                ->setName('Smartphone')
                ->setDescription('ceci est une description')
                ->setPrice(559.99)
                ->setStock(0)
                ->setImage('image5.png')
            ,
        ];

        array_map(fn($product) => $manager->persist($product), $products);
        $manager->flush();
    }
}
