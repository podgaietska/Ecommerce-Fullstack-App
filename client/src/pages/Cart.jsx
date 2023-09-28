import React from "react";
import CartProduct from "../components/CartProduct";
import { useEffect, useState } from "react";

function Cart({cart, removeFromCart}) {
    const [cartTotal, setCartTotal] = useState(0);

    useEffect( () => {
        setCartTotal(cart.reduce((total, product) => total + product.price, 0));
    }, [cart]);

    return(<div>
        <div className="page-header">
            <h2>.shopping cart</h2>
        </div>
        {/* Cart */}
        {cart.length !==0 ? (
            <div className="container cart">
            <table width="100%">
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cartProduct) => (
                        <CartProduct cartProduct={cartProduct} removeFromCart={removeFromCart}/>
                    ))}
                </tbody>
            </table>
        </div>)
        : <div className="empty-cart">Oh no! Looks like your cart is empty...</div>}

        {/* Payment */}
        <div className="cart-payment">
            <div className="coupon">
                <h3>Apply Coupon</h3>
                <div>
                    <input type="text" placeholder="Enter Your Coupon" />
                    <button className="coupon-btn">Apply</button>
                </div>
            </div>
            <div className="subtotal">
                <h3>Cart Total</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>${cartTotal}</td>
                        </tr>
                        <tr>
                            <td>Shipping Cost</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>${cartTotal}</strong></td>
                        </tr>
                    </tbody>
                </table>
                <button className="checkout-btn">Proceed to checkout</button>
            </div>
        </div>
    </div>);
}

export default Cart;
