import './Product.css';

export const Product = function ({product,setCartUpdated = null}) {

    /**
     * Manages the action of removing a product from the basket
     */
   async function handleClick(productId, amount) {
       await fetch('/api/cart/add', {
           method: "post",
           headers: {
               "Accept": "application/jon",
               'Content-Type': "application/json"
           },
           "body": JSON.stringify( {
               "product_id": productId,
               "quantity": amount,
           })
       })
       // on peut pas avoir un product en dessous de 0
        if(product.cart > 0 || amount === 0) {
            product.cart -= 1;
        }
        setCartUpdated(true);
    }

    /**
     * Display a message, when the product is  not unavailable
     */
    function handleAlertStockClick(e) {
        if(product.cart === 0  && product.stock === 0) {
            <p className="alert-stock" style={{display: 'flex'}} >
                Cet article est indisponible pour le moment !
            </p>
            console.log("Cet article n'est plus dipo !");
        }
    }

    return (
        <div className="Product" id={product.id}>
            <div className="image">
                <img src={'/uploads/' + product.image} alt={product.name} />
            </div>
            <div className="content">
                <p className="price">$ {product.price}</p>
                <h1>{product['name']}</h1>
                <p className="description">{product.description}</p>
                <div className="flexRow">
                    <div className={"QuantitySelector" +
                        (product.stock === 0 ? " product-disabled" : "")
                    }>
                        <button onClick={() => handleClick(product.id, 0)}> - </button>
                        <div>{product.cart}</div>
                        <button onClick={ () => handleClick(product.id, 1)} onDoubleClick={handleAlertStockClick}> + </button>
                    </div>
                    <p className={"alert-stock" + (product.stock === 0)}/>
                </div>
            </div>
        </div>
    );
}