import "./Home.css";

import {useEffect, useState} from "react";

import {Category} from "../../components/Category/Category.jsx";
import {Cart} from "../../components/Cart/Cart.jsx";
import {ProductList} from "../../components/ProductList/ProductList.jsx";

export const Home = function() {

    const [products, setProducts] = useState([]);
    const [isProductUpdated, setIsProductUpdated] = useState(false);
    const [category, setCategory] = useState(0);

    // For que l'user se retouve in the site
    useEffect(() => {document.title = 'Home'}, []);

    if(isProductUpdated) {
        setProducts(products);
        setIsProductUpdated(false);
    }

    return (
        <>
            <div className="container">
                <Cart products={products}  setIsProductUpdated={setIsProductUpdated}/>
                <div className="container_product">
                    <Category setCategory ={setCategory} />
                    <ProductList category={category} products={products} setIsProductUpdated={setIsProductUpdated}/>
                </div>
            </div>
        </>
    );
}

export default Home;
