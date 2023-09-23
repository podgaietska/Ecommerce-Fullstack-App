import React from "react";
import Navbar from "../components/Navbar";
import { BiSearch, BiHeart, BiCart, BiRightArrowAlt } from "react-icons/bi";
import Footer from "../components/Footer";

function Wishlist() {
    return(<div>
        <div className="section all-products">
        <div className="top">
            <h1>MY WISHLIST</h1>
        </div>
        <div className="product-center container">
            <div className="product-item shop">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="/product2.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <p>$1500</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><a href="productDetails.html"><BiSearch /></a></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product4.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <p>$1500</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><a href="productDetails.html"><BiSearch /></a></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product3.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <p>$1500</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><a href="productDetails.html"><BiSearch /></a></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product1.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <p>$1500</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><a href="productDetails.html"><BiSearch /></a></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product5.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <p>$1500</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><a href="productDetails.html"><BiSearch /></a></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product6.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <p>$1500</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><a href="productDetails.html"><BiSearch /></a></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product7.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <p>$1500</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><a href="productDetails.html"><BiSearch /></a></li>
                    <li><BiCart /></li>
                </ul>
            </div>
            <div className="product-item">
                <div className="overlay">
                    <a href="productDetails.htlm" className="product-thumb">
                        <img src="product8.jpg" alt="" />
                    </a>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>MEN'S CLOTHES</span>
                    <a href="productDetails.html">
                        Palace Vintage Jacket
                    </a>
                    <p>$1500</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><a href="productDetails.html"><BiSearch /></a></li>
                    <li><BiCart /></li>
                </ul>
            </div>
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