import React from "react";
import {BiHeart, BiCart} from "react-icons/bi";
import {useLocation} from "react-router-dom";
import Product from "../components/Product";
import {useRef, useEffect} from "react";
import { toast } from 'react-toastify';

function ProductDetails({addToCart, removeFromCart, productExistsInCart, allProducts, addToWishlist, removeFromWishlist, productExistsInWishlist, user}) {
    const {state} = useLocation();
    const product = state.product;
    const topRef = useRef();

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth"});
    }, [product]);

    const handleProductInCart = () => {
        if (user !== null){
            if (productExistsInCart(product)){
                removeFromCart(product);
            }
            else{
                if (productExistsInWishlist(product)){
                    window.alert("Product added to cart!");
                }
                addToCart(product);
            }
        }  
        else{
            toast.warn("You're not logged in. Please log in to add this product to your cart.")
        }      
    };

    const handleProductInWishlist = () => {
        if (user !== null){
            if (productExistsInWishlist(product)){
                removeFromWishlist(product);
            }
            else{
                addToWishlist(product);
            } 
        }   
        else{
            toast.warn("You're not logged in. Please log in to add this product to your wishlist.")
        }    
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

    const relatedProducts = allProducts.filter(relatedProduct => relatedProduct._id !== product._id);
    shuffleArray(relatedProducts);
    const selectedRelatedProducts = relatedProducts.slice(0, 4);

    console.log(selectedRelatedProducts);
    return (<div> 
    <div className="product-detail" ref={topRef}>
        <div className="details container">
            <div className="left image-container">
                <div className="main">
                    <img src={product.image} id="zoom" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="info">
                    <span>{product.brand.toUpperCase()}</span>
                    <h1>{product.name}</h1>
                    <div className="price">${product.price}</div>
                    <ul className="action-btns">
                        <li className={productExistsInCart(product) ? "active" : ""} onClick={handleProductInCart}><BiCart /></li>
                        <li className={productExistsInWishlist(product) ? "active" : ""} onClick={handleProductInWishlist}><BiHeart /></li>
                    </ul>
                </div>
                <div className="product-description">
                    <h3>Product Decription</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    </div>
    <div className="section new-arrival">
        <div className="title related-products">
            <h1>RELATED ITEMS</h1>
            <p>Check out similar styles that others also liked</p>
        </div>
        <div className="product-center">
            {selectedRelatedProducts.map((product) => (
                <Product product={product} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist} user={user}/>
            ))}
        </div>
    </div>
    </div>);
}

export default ProductDetails;