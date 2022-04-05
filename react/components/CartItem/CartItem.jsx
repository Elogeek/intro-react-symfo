import './CartItem.css';

export const CartItem = function ({cartItem}) {
    const altTrash = "Amazing trash !";

    /**
     * Delete a product du basket
     */
    function handleDeleteProductClick(e) {
        cartItems.map(cartItem => cartItem.product.cart === 0);
        setCartUpdated(true);
        console.log("Product is empty !");
    }
    return (
        <div className="CartItem" id={cartItem.product.id}>
            <div className="center">
                    <img src='./../../../uploads/trash.svg' className="trash" alt={altTrash} onClick={handleDeleteProductClick}/>
            </div>
            <div className="container_product">
                <div className="flexRow">
                    <p className="CartItem_name">{cartItem.product.name}</p>
                    <span className="CartItem_quantity">({cartItem.product.cart})</span>
                </div>
                <div className="lineHorizontal"/>
            </div>
        </div>
    );
}