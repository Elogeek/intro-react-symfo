import './Product.css';

export const Product = function ({product,setIsProductUpdated = null}) {

    /**
     * Manages the action of removing a product from the basket
     */
    function handleMinusClick(e) {
        if(product.cart > 0) {
            product.cart -= 1;
            setIsProductUpdated(true);
        }
    }

    /**
     *  Manages the add a product action of the basket
     */
    function handlePlusClick(e) {
        if(product.cart < product.stock) {
            product.cart += 1;
            setIsProductUpdated(true);
        }
    }

    /**
     * Display a alert, when the product is  not unavailable
     */
    function handleDoubleClick(e) {
        if(product.cart === 0 && product.stock === 0){
            alert("Cet article est indisponible pour le moment !");
        }
    }

    return (
        <div className="Product" id={product.id}>
            <div className="image">
                <img src={(require(`./../../../assets/images/${product.image}`))} alt={product.name} />
            </div>
            <div className="content">
                <p className="price">{product.price}</p>
                <h1>{product['name']}</h1>
                <p className="description">{product.description}</p>
                <div className="flexRow">
                    <div className={"QuantitySelector" +
                        (product.stock === 0 ? "product-disabled" : "")
                    }>
                        <button onClick={handleMinusClick}> - </button>
                        <div>{product.cart}</div>
                        <button onClick={handlePlusClick} onDoubleClick={handleDoubleClick}> + </button>
                    </div>
                </div>
            </div>
        </div>
    );
}