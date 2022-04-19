import { useState, useContext } from "react";
import styled from "styled-components";
import {lighten, darken} from "polished";
import {CartContextProvider} from "../context/CartContext";

export const Product = function ({product,}) {

    const [stock, setStock] = useState(product.stock);
    const {setCartUpdated} = useContext(CartContextProvider);

    /**
     * Manages the action of removing a product from the basket (+ or -)
     */
   async function handleClick(productId, amount) {
       const fetchInit = {
           method: "post",
           headers: {
               "Accept": "application/jon",
               'Content-Type': "application/json"
           },
       };

       // Add or remove to cart
        await fetch("/api/cart/add", {
            ...fetchInit,
            body: JSON.stringify({
                product_id: productId,
                quantity: amount,
            }),
        });

        // Getting new product stock
        const response = await fetch("/api/products/stock", {
            ...fetchInit,
            body: JSON.stringify({
                product_id: productId,
            }),
        });

        const data = await response.json();
        setStock(data.stock);
        setCartUpdated(true);

   };

    /**
     * Display a message, when the product is  not unavailable

    function handleAlertStockClick(e, product) {
        if(product.cart === 0  && product.stock === 0) {
            alert("Cet article est indisponible pour le moment !");
        }
    } */

    return (
        <ProductContainer id={product.id} className={className}>
            <ProductImage>
                <img src={'/uploads/' + product.image} alt={product.name} />
            </ProductImage>
            <ProductContent>
                <ProductPrice>$ {product.price}</ProductPrice>
                <ProductTitle>{product['name']}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductFooter>
                    <ProductStock className="stock-status">
                        En stock: <span>{stock}</span>
                    </ProductStock>
                    {null !== setCartUpdated && (
                        <QuantitySelector stockValue={stock}
                                          className={
                                              (parseInt(stock) === 0 ? " product-disabled" : "")
                                          }
                        >
                            <MinusButton className="less" onClick={() => handleClick(product.id, -1)}/>
                            <PlusButton className="add" onClick={() => handleClick(product.id, 1)}/>
                        </QuantitySelector>
                    )}
                </ProductFooter>
            </ProductContent>
        </ProductContainer>
    );
}

// Design with styledComponent

// Shortcut for easy
const isLoaded = false;
const minusLighten = lighten(0.05, "#E3E3E3");
const plusLighten = lighten(0.05, "rgba(0, 0, 255, 0.91)");

const ProductContainer = styled.div `
    border-radius: 4px;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.7);
    margin: 15px 0 0;
    width: 100%;
    background-color: ${({theme}) => theme !== undefined && theme.components.background};
    color: ${({theme}) => theme !== undefined && theme.components.textColor};
  
    &:hover {
      box-shadow: rgba(23, 38, 211, 0.48) 0 5px 15px 0;
  }
`;

const ProductImage = styled.div `
    margin-right: 20px;
`

const ProductContent = styled.div `
   margin-right: 20px;
`;

const ProductFooter = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const colors = {
    primary: darken(10, "black"),
    secondary: "red"
}

const ProductTitle = styled.h1 `
    font-size: 16px;
    font-weight: bold;
`;

const ProductDescription = styled.p `
    font-size: 13px;
    font-weight: normal;
`;

const ProductPrice = styled.span `
    font-weight: bold;
`;

const ProductStock = styled.div `
    margin: 2px;
    font-size: 12px;
    font-weight: bold;
`;

const MinusButton = styled.button ` 
    &::before {
        content: "-"
    }
    &:hover {
        background-color:${minusLighten};
    }
    
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    color: #545454;
    background-color: #e3e3e3;
`;

const PlusButton = styled(MinusButton) ` 
    &::before {
        content: "+";
    }
    &:hover {
        background-color: ${plusLighten};
    }
   
    color: #f9f9fa;
    background-color: rgba(0, 0, 255, 0.91);
`;

const QuantitySelector = styled.div `
    display: flex;
    justify-content: space-between;
    width: 63px;
    border: 2px solid #e3e3e3;
    border-radius: 8px;
    padding: 5px;
    background-color: ${(stockValue) => stockValue === 0 ? "#e3e3e3" : "rgba(183,187,238,0.48)"};
    &.product-disabled {
      background-color: ${colors.primary};
    }
`;
