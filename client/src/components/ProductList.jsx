import React, {useState, useEffect} from "react";
import Product from "./Product";


function ProductList({category}) {
    const [allProducts, setallProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
      if(category === 'all-products'){
        setFilteredProducts(allProducts);
      }
      else{
        const filtered = allProducts.filter( (product) => product.category.name.toLowerCase() === category);
        setFilteredProducts(filtered);
        console.log(filteredProducts);
      }
    }, [category]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const res = await fetch('api/products', {
          method: 'GET',
          header: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok){
          throw new Error(`An error occured: ${res.status}`);
        }

        const data = await res.json();
        setallProducts(data);
        setFilteredProducts(data);
      };

      fetchProducts();
    }catch (error){
      console.log(error);
    }
  }, []);

  const matchesCategory = (product) => {
    if (product.category.name.toLowerCase() === category){
      console.log(product);
      return product;
    }
  };

    return (
        <div className="product-center container">
            {filteredProducts.map((product) => (
                <Product product={product} />
            ))}
        </div>
    )
}

export default ProductList;