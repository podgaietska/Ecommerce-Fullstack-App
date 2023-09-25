import React from 'react';

function CartProduct({cartProduct, removeFromCart}) {
    const onRemoveProduct = () => {
        removeFromCart(cartProduct);
    }

    return (
        <tr className="cart-tr">
            <td><img src={cartProduct.image} alt="" /></td>
            <td>{cartProduct.name}</td>
            <td>${cartProduct.price}</td>
            <td><input type="number" value="1" /></td>
            <td className="remove-btn" onClick={onRemoveProduct}>x</td>
        </tr>
    )
};

export default CartProduct;