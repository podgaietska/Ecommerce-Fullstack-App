import React, {useState, useEffect} from "react";
import Product from "./Product";

function ProductList({category, allProducts, addToCart, cart, removeFromCart}) {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
      if(category === 'all-products'){
        setFilteredProducts(allProducts);
      }
      else{
        const filtered = allProducts.filter( (product) => product.category.name.toLowerCase() === category);
        setFilteredProducts(filtered);
      }
    }, [category]);

  useEffect(() => {
    if (filteredProducts.length === 0)
      setFilteredProducts(allProducts);
  }, [allProducts]);

    return (
        <div className="product-center container">
            {filteredProducts.map((product) => (
                <Product product={product} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart}/>
            ))}
        </div>
    )
}

export default ProductList;