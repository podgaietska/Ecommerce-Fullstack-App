import React from "react";
import Navbar from "../components/Navbar";
import { BiRightArrowAlt } from "react-icons/bi";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import {useState} from "react";

function Shop({allProducts, addToCart, removeFromCart, productExistsInCart, addToWishlist, removeFromWishlist, productExistsInWishlist}) {
    const [category, setCategory] = useState('all-products');

    return (
    <div>
        <div className="section all-products">
        <div className="top">
            {category !== "all-products" ? (<h1>{category.toUpperCase()}</h1>) : (<h1>ALL PRODUCTS</h1>)}
            <form>
                <select defaultValue={'all-products'} onChange={(e) => {setCategory(e.target.value)}}>
                    <option value="all-products">All Products</option>
                    <option value="jackets">Jackets</option>
                    <option value="t-shirts">T-shirts</option>
                    <option value="hoodies">Hoodies</option>
                    <option value="crewnecks">Crewnecks</option>
                    <option value="others">Accessories</option>
                </select>
                <span><i className="bx bx-chevron-down"></i></span>
            </form>
        </div>
        <ProductList category={category} allProducts={allProducts} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist}/>
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

export default Shop;