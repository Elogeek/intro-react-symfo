import {useEffect, useState} from "react";
import {Category} from "../components/Category.jsx";
import {Cart} from "../components/Cart.jsx";
import {ProductList} from "../components/ProductList.jsx";
import styled from "styled-components";
import {CartContext} from "../context/CartContext";

export const Home = function() {

    const [category, setCategory] = useState(0);
    // For que l'user se retouve in the site
    useEffect(() => {
        document.title = 'Home'
    }, []);

    return (
        <>
            <HomePage>
                <CartContext>
                    <Cart/>
                    <div className="container_product">
                        <Category setCategory ={setCategory} />
                        <ProductList category={category}/>
                    </div>
                </CartContext>
            </HomePage>
        </>
    );
}

export default Home;

// Design
const HomePage = styled.div `
    display: flex;
  justify-content: space-around;
  margin: 30px 80px;
  align-items: flex-start;
  
  & > div {
    max-width: 800px;
  }
`;