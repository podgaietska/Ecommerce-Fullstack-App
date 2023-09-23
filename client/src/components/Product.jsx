import React, {useState, useEffect} from "react";
import { BiSearch, BiHeart, BiCart, BiRightArrowAlt } from "react-icons/bi";
import {Link} from 'react-router-dom';

function Product({product}) {
    
    return (
        <div className="product-item">
                <div className="overlay">
                    <div className="product-thumb">
                        <img src={product.image} alt="" />
                    </div>
                    <span className="discount">50%</span>
                </div>
                <div className="product-info">
                    <span>{product.category.name}</span>
                    <a href="productDetails.html">
                        {product.name}
                    </a>
                    <p>${product.price}</p>
                </div>
                <ul className="icons">
                    <li><BiHeart /></li>
                    <li><Link to={"/product-details"} state={{product: product}}><BiSearch /></Link></li>
                    <li><BiCart /></li>
                </ul>
        </div>
    );
}

export default Product;