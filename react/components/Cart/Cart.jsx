import './Cart.css';
import {CartItem} from "../CartItem/CartItem";
import {useEffect,useState} from "react";

export const Cart = function ({ cartUpdated, setCartUpdated}) {

    const [cartItems, setCartItems] = useState([]);
    useEffect( () => {
        async function getCart() {
            const response = await fetch('/api/cart');
            const data = await response.json();
            setCartItems(data.cartItems);
            setCartUpdated(false);
        }

        getCart()
            .catch( () => console.log("Erreur avec la récupération du panier"));
    }, [cartUpdated]);

    /**
     * Empty a basket
     */
    function handleBasketEmptyClick(e) {
        cartItems.map(cartItem => cartItem.product.cart === 0);
        setCartUpdated(true);
        console.log("Basket is empty !");
    }

    return (
        <div className="Cart">
            <h1 className="title">Vos articles</h1>
            {cartItems.map((cartItem) =>
                <CartItem key={cartItem.product.id} cartItem={cartItem}
                />)}
            <button className="btn_empty_basket" onClick={handleBasketEmptyClick}>Vider le panier</button>
        </div>
    );
}