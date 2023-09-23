import React from "react";
import Navbar from "../components/Navbar";

function Cart() {
    return(<div>
        <div className="page-header">
            <h2>.shopping cart</h2>
        </div>
        {/* Cart */}
        <div className="container cart">
            <table width="100%">
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="product3.jpg" alt="" /></td>
                        <td>Represent Hoodie</td>
                        <td>$99.00</td>
                        <td><input type="number" value="1" /></td>
                        <td>$99.00</td>
                        <td><a href="#"><i className="bx bx-x"></i></a></td>
                    </tr>
                    <tr>
                        <td><img src="product6.jpg" alt="" /></td>
                        <td>Represent T-shirt</td>
                        <td>$99.00</td>
                        <td><input type="number" value="1" /></td>
                        <td>$99.00</td>
                        <td><a href="#"><i className="bx bx-x"></i></a></td>
                    </tr>
                    <tr>
                        <td><img src="product7.jpg" alt="" /></td>
                        <td>North Face Wool-Blend Down Jacket</td>
                        <td>$99.00</td>
                        <td><input type="number" value="1" /></td>
                        <td>$99.00</td>
                        <td><a href="#"><i className="bx bx-x"></i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>

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
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>$1230</td>
                    </tr>
                    <tr>
                        <td>Shipping Cost</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$1230</strong></td>
                    </tr>
                </table>
                <button className="checkout-btn">Proceed to checkout</button>
            </div>
        </div>
    </div>);
}

export default Cart;
