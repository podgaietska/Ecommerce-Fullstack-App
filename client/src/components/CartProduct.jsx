import React from 'react';
import { Link } from 'react-router-dom';

function CartProduct({cartProduct, removeFromCart}) {

    const onRemoveProduct = () => {
        removeFromCart(cartProduct);
    }

    return (
        <tr className="cart-tr">
            <td><Link to={"/product-details"} state={{product: cartProduct}}><img src={cartProduct.image} alt="" /></Link></td>
            <td>{cartProduct.name}</td>
            <td>${cartProduct.price}</td>
            <td className="remove-btn" onClick={onRemoveProduct}>x</td>
        </tr>
    )
};

export default CartProduct;