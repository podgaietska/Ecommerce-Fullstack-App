import React from "react";
import Navbar from "../components/Navbar";
import { BiSearch, BiHeart, BiCart, BiRightArrowAlt } from "react-icons/bi";
import Product from "../components/Product";
import Footer from "../components/Footer";

function Wishlist({wishlist, addToCart, removeFromCart, productExistsInCart, addToWishlist, removeFromWishlist, productExistsInWishlist}) {

    return(<div>
        <div className="section all-products">
        <div className="top">
            <h1>MY WISHLIST</h1>
        </div>
        <div className="product-center container">
            {wishlist.map((product) => (
                <Product product={product} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist}/>
            ))}
        </div>
    </div>
    <div className="pagination">
        <div className="container">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span><BiRightArrowAlt /></span>
        </div>
    </div>
    <Footer />
    </div>);
}

export default Wishlist;