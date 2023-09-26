import React from "react";
import ProductList from "../components/ProductList";
import {useEffect, useState} from "react";

function Wishlist({wishlist, addToCart, removeFromCart, productExistsInCart, addToWishlist, removeFromWishlist, productExistsInWishlist}) {
    const [pages, setPages] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [productsOnPage, setProductsOnPage] = useState([]);

    useEffect(() => {
        if (wishlist.length > 0) {
            setPages(splitIntoPages(wishlist));
        }
    }, [wishlist]);

    useEffect(() => {
        setProductsOnPage(pages[pageNum]);
    }, [pages, pageNum]);

    const splitIntoPages = (products) => {
        let productsOnPage = [];
            for (let i = 0; i < products.length; i += 8) {
                productsOnPage.push(products.slice(i, i + 8));
            }
        return productsOnPage;
    };

    return(<div>
        <div className="section all-products">
        <div className="top">
            <h1>MY WISHLIST</h1>
        </div>
            {productsOnPage && <ProductList productsOnPage={productsOnPage} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist}/>}
    </div>
    <div className="pagination">
        <div className="container">
            {pages.map((page, index) => (
                    <span onClick={() => {setPageNum(index)}}>{index + 1}</span>
                ))}
        </div>
    </div>
    </div>);
}

export default Wishlist;