import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {BiHeart, BiCart, BiSearch} from "react-icons/bi";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import {BiLeftArrowAlt} from "react-icons/bi";
import ProductList from "../components/ProductList";
import Product from "../components/Product";

function ProductDetails({addToCart, removeFromCart, productExistsInCart, allProducts, addToWishlist, removeFromWishlist, productExistsInWishlist}) {
    const {state} = useLocation();
    const product = state.product;

    const handleProductInCart = () => {
        if (productExistsInCart(product)){
            removeFromCart(product);
        }
        else{
            if (productExistsInWishlist(product)){
                window.alert("Product added to cart!");
            }
            addToCart(product);
        }        
    };

    const handleProductInWishlist = () => {
        if (productExistsInWishlist(product)){
            removeFromWishlist(product);
        }
        else{
            addToWishlist(product);
        }        
    };

    const relatedProducts = allProducts.filter(relatedProduct => relatedProduct._id !== product._id);
    const selectedRelatedProducts = relatedProducts.slice(0, 4);

    console.log(selectedRelatedProducts);
    return (<div> 
    <div className="product-detail">
        <div className="details container">
            <div className="left image-container">
                <div className="main">
                    <img src={product.image} id="zoom" alt="" />
                </div>
            </div>
            <div className="right">
                <span>{product.brand.toUpperCase()}</span>
                <h1>{product.name}</h1>
                <div className="price">${product.price}</div>
                <form>
                    <div>
                        <select defaultValue={'default'}>
                            <option value="default" disabled>
                                Select Size
                            </option>
                            <option value="1">XS</option>
                            <option value="2">S</option>
                            <option value="3">M</option>
                            <option value="4">L</option>
                        </select>
                        <span><i className="bx bx-chevron-down"></i></span>
                    </div>
                </form>
                <ul className="action-btns">
                    <li className={productExistsInCart(product) ? "active" : ""} onClick={handleProductInCart}><BiCart /></li>
                    <li className={productExistsInWishlist(product) ? "active" : ""} onClick={handleProductInWishlist}><BiHeart /></li>
                </ul>
                <h3>Product Decription</h3>
                <p>{product.description}</p>
            </div>
        </div>
    </div>
    <div className="section new-arrival">
        <div className="title related-products">
            <h1>RELATED PRODUCTS</h1>
            <p>Check out similar styles</p>
        </div>
        <div className="product-center">
            {selectedRelatedProducts.map((product) => (
                <Product product={product} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist}/>
            ))}
        </div>
    </div>
    </div>);
}

export default ProductDetails;