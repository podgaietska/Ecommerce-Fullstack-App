import { BiSearch, BiHeart, BiCart, BiRightArrowAlt } from "react-icons/bi";
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

function Product({product, addToCart, removeFromCart, productExistsInCart, addToWishlist, removeFromWishlist, productExistsInWishlist, user}) {
    
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

    return (
        <div className="product-item">
                <div className="overlay">
                    <div className="product-thumb">
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="product-info">
                    <span>{product.category.name}</span>
                    <a href="productDetails.html">
                        {product.name}
                    </a>
                    <p>${product.price}</p>
                </div>
                <ul className="icons">
                    <li className={productExistsInWishlist(product) ? "active" : ""} onClick={handleProductInWishlist}><BiHeart /></li>
                    <li><Link to={"/product-details"} state={{product: product}}><BiSearch /></Link></li>
                    <li className={productExistsInCart(product) ? "active" : ""} onClick={handleProductInCart}><BiCart /></li>
                </ul>
        </div>
    );
}

export default Product;