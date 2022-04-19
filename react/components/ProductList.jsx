import styled from "styled-components";
import {Product} from "./Product.jsx";
import { useEffect, useState, useContext} from "react";

export const ProductList = function({category}) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        async function getProducts() {
            setIsLoading(true);
            const response = await fetch('/api/products');
            setProducts(await response.json());
            setIsLoading(false);
        }
        getProducts().catch( () =>
            setIsLoading(false));
            console.log('Impossible recover the products');
    }, []);

    return (
        <ContainerProductList>
            <ul>
                {isLoading
                ? [1, 2, 3, 4, 5].map((index) => <ProductListLi key={index}/>)
                : products
                    .filter((product) => category === 0 || product.category.id === category)
                    .map((product) => (
                        <CustomProduct
                            key={product.id}
                            product={product}
                        />
                    ))}
            </ul>
        </ContainerProductList>
    );
};

// Design
const ContainerProductList = styled.div`
    width: 100%;
    padding: 10px;
    margin: 15px;
`;

const ProductListLi = styled.li `
    list-style-type: none;
`;

const CustomProduct = styled(Product)`
    box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
`;