import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {BiHeart, BiCart, BiSearch} from "react-icons/bi";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";

function ProductDetails() {
    const {state} = useLocation();
    const product = state.product;
    console.log(product);

    return (<div> 
        <div className="product-details-nav">
        <div className="directory">
            <a href="shop.html"><i className="bx bx-left-arrow-alt"></i></a>
            <a href="#">ALL</a>
            /
            <a href="#">Coats and jackets</a>
            /
            <a href="#">Bomber Jacket</a>
        </div>
    </div>
    <div className="product-detail">
        <div className="details container">
            <div className="left image-container">
                <div className="main">
                    <img src={product.image} id="zoom" alt="" />
                </div>
            </div>
            <div className="right">
                <span>NORTH FACE</span>
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
                <form className="action-btns">
                    <a href="" className="addCart"><BiCart /></a>
                    <a href="" className="addCart"><BiHeart /></a>
                </form>
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
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product1.jpg" alt="" />
                    </a>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Undercover Bomber Jacket
                    </a>
                    <p>$1200</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><BiSearch /></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product2.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <h4>$1500</h4>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><BiSearch /></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product3.jpg" alt="" />
                    </a>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Represent Hoodie
                    </a>
                    <h4>$350</h4>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><BiSearch /></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product4.jpg" alt="" />
                    </a>
                    <span className="discount">30%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Polar Skate Crewneck
                    </a>
                    <h4>$400</h4>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><BiSearch /></li>
                    <li><BiCart /></li>
                </ul>
            </div>
        </div>
    </div>
    </div>);
}

export default ProductDetails;