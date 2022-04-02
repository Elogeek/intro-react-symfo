import './ProductList.css';
import {Product} from "../Product/Product.jsx";

export const ProductList = function({category,products, setIsProductUpdated}) {

    return (
        <div className="ProductList">
            <ul>
                {products
                    .filter(product => category === 0 || product.category === category)
                    .map(product => <Product key={product.id} product={product} setIsProductUpdated={setIsProductUpdated}/>
                )}
            </ul>
        </div>
    );

};