import "./Home.css";

import {useEffect, useState} from "react";
import {Category} from "../../components/Category/Category.jsx";
import {Cart} from "../../components/Cart/Cart.jsx";
import {ProductList} from "../../components/ProductList/ProductList.jsx";

export const Home = function() {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        async function getProducts() {
            const response = await fetch('/api/products');
            setProducts(await response.json());
        }
        getProducts().catch( () => console.log('Impossible recover the products'));
    }, []);

    const [cartUpdated, setCartUpdated] = useState(false);
    const [category, setCategory] = useState(0);

    // For que l'user se retouve in the site
    useEffect(() => {
        document.title = 'Home'
    }, []);

    if(cartUpdated) {
        setProducts(products);
        setCartUpdated(false);
    }

    return (
        <>
            <div className="container">
                <Cart setCartUpdated={setCartUpdated}/>
                <div className="container_product">
                    <Category setCategory ={setCategory} />
                    <ProductList
                        category={category} products={products} setCartUpdated={setCartUpdated}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
