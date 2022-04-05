import './Cart.css';
import {CartItem} from "../CartItem/CartItem";
import {useEffect,useState} from "react";
import {Loader} from "../Loader/Loader";

export const Cart = function ({ cartUpdated, setCartUpdated}) {

    const [isLoading, setIsLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect( () => {
        async function getCart() {
            const response = await fetch('/api/cart');
            const data = await response.json();
            setCartItems(data.cartItems);
            setCartUpdated(false);
        }

        getCart()
            .catch( () => console.log("Oups, erreur avec la récupération du panier"));
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
            {isLoading ? (
                <Loader/>
            ) : (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.product.id} cartItem={cartItem}/>
                ))
            )}
            <button className="btn_empty_basket" onClick={handleBasketEmptyClick}>Vider le panier</button>
        </div>
    );
}