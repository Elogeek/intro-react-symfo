import './CartItem.css';
import trash from '../../../assets/images/trash.svg';

export const CartItem = function ({product}) {
    const altTrash = "Amazing trash !";

    return (
        <div className="CartItem" id={product.id}>
            <div className="center">
                <img src={trash} className="trash" alt={altTrash}/>
            </div>
            <div className="container_product">
                <div className="flexRow">
                    <p className="CartItem_name">{product.name}</p>
                    <span className="CartItem_quantity">({product.cart})</span>
                </div>
                <div className="lineHorizontal"/>
            </div>
        </div>
    );
}