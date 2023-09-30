import React, {useState, useEffect} from "react";
import Product from "./Product";

function ProductList({productsOnPage, addToCart, removeFromCart, productExistsInCart, addToWishlist, removeFromWishlist, productExistsInWishlist, user}) {
    
    return (
      <>
        <div className="product-center container">
            {productsOnPage.map((product) => (
                <Product product={product} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist} user={user}/>
            ))}
        </div>
      </>
    )
}

export default ProductList;