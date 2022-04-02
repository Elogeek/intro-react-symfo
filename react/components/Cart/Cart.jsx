import './Cart.css';
import {CartItem} from "../CartItem/CartItem";
import {useEffect} from "react";

export const Cart = function ({products, setIsProductUpdated}) {

    useEffect( () => {
        alert("Hello word");
    });

    /**
     * Vider le panier
     */
    function handleClick(e) {
        products.map(product => product.cart = 0);
        setIsProductUpdated(true);
    }

    return (
        <div className="Cart">
            <h1 className="title">Vos articles</h1>
            {products.map(product =>
                product.cart > 0 && <CartItem key={product.id} product={product}
                />)}
            <button className="btn_refresh_cart" onClick={handleClick}>Vider le panier</button>
        </div>
    );
}