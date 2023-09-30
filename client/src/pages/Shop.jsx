import React from "react";
import ProductList from "../components/ProductList";
import {useState, useEffect, useRef} from "react";

function Shop({allProducts, addToCart, removeFromCart, productExistsInCart, addToWishlist, removeFromWishlist, productExistsInWishlist, user}) {
    const [category, setCategory] = useState('all-products');
    const [pages, setPages] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productsOnPage, setProductsOnPage] = useState([]);
    const topRef = useRef();

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth"});
    }, []);

    useEffect(() => {
        if(category === 'all-products'){
            setFilteredProducts(allProducts);
        }
        else{
            setPageNum(0);
            const filtered = allProducts.filter( (product) => product.category.name.toLowerCase() === category);
            setFilteredProducts(filtered);
        }
    }, [category]);

    useEffect(() => {
        if (filteredProducts.length === 0)
            if (allProducts.length > 0){
                setFilteredProducts(allProducts);
            }
    }, [allProducts]);

    useEffect(() => {
        if (filteredProducts.length > 0) {
            setPages(splitIntoPages(filteredProducts));
        }
    }, [filteredProducts]);

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

    const changePage = (index) => {
        topRef.current.scrollIntoView({ behavior: "smooth"});
        setPageNum(index);
    }

    return (
        <div>
            <div className="section all-products">
                <div className="top" ref={topRef}>
                    {category !== "all-products" ? (<h1>{category.toUpperCase()}</h1>) : (<h1>ALL PRODUCTS</h1>)}
                    <form>
                        <select defaultValue={'all-products'} onChange={(e) => {setCategory(e.target.value)}}>
                            <option value="all-products">All Products</option>
                            <option value="jackets">Jackets</option>
                            <option value="t-shirts">T-shirts</option>
                            <option value="hoodies">Hoodies</option>
                            <option value="crewnecks">Crewnecks</option>
                            <option value="pants">Pants</option>
                        </select>
                        <span><i className="bx bx-chevron-down"></i></span>
                    </form>
                </div>
                {productsOnPage && <ProductList productsOnPage={productsOnPage} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist} user={user}/>}
            </div>
            <div className="pagination">
                <div className="container">
                    {pages.map((page, index) => (
                        <span onClick={() => changePage(index)}>{index + 1}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;