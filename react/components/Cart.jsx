import {CartItem} from "./CartItem";
import {useEffect,useState} from "react";
import {Loader} from "./Loader";
import styled from "styled-components";

export const Cart = function () {

    const [isLoading, setIsLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const {cartUpdated, setCartUpdated} = useContext(CartContextProvider);

    /**
     * Récup du cart actuel
     */
    useEffect( () => {
        async function getCart() {
            setIsLoading(true);
            const response = await fetch('/api/cart');
            const data = await response.json();
            setCartItems(data.cartItems);
            setCartUpdated(false);
            setIsLoading(false);
        }

        getCart()
            .catch( () => setIsLoading(false));
                console.log("Oups, erreur avec la récupération du panier");
    }, [cartUpdated]);

    /**
     * Empty a basket
     */
    async function handleBasketEmptyClick(e) {
        await fetch("/api/cart/delete", {method: "post"});
        setCartUpdated(true);
        console.log("Basket is empty !");
    }

    return (
        <CartContainer>
            <div>
                <CartTitle>Vos articles</CartTitle>
            </div>

            <CartContent>
                {isLoading ? (
                    <Loader/>
                ) : (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.product.id} cartItem={cartItem}/>
                    ))
                )}
            </CartContent>

            <CartFooter>
                <EmptyCartButton onClick={handleBasketEmptyClick}>Vider le panier</EmptyCartButton>
            </CartFooter>

        </CartContainer>
    );
}

/**
 * Design with styleComponents
 */
const CartContainer = styled.div `
        background-color: ${({theme}) => theme.components.background};
        border-radius: 4px;
        border: 1px solid #e3e3e3;
        min-height: 280px;
        min-width: 125px;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        color: #545454;
    `;

const CartTitle = styled.h1 `
        font-size: 12px;
        flex-basis: 5%;
        color: ${({theme}) => theme.components.textColor};
    `
const CartContent = styled.div `
        flex-basis: 73%;
        padding: 3px;
        width: 100%;
    `;

const CartFooter = styled.div `
        align-self: flex-end;
    `;

const EmptyCartButton = styled.button `
      border: 1px solid #e3e3e3;
      border-radius: 5px;
      font-size: 8px;
      padding: 3px 10px;
      color: ${({theme}) => theme.components.textColor};
      &:hover {
        background-color: #8C8E92;
        color: white;
      }
    `;
