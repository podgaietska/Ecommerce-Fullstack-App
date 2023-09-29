import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import UserProfile from './pages/userProfile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
  const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []);
  const [allProducts, setallProducts] = useState([]);

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
      };

      fetchProducts();
    }catch (error){
      console.log(error);
    } 
  }, []);

  const getUserCart = (data) => {
    const userData = data;
    try {
      const fetchCart = async () => {
        const res = await fetch(`api/cart/${userData.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userData.token}`,
          },
        });
        if (!res.ok){
          throw new Error(`An error occured: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setCart(data);
        localStorage.setItem('cart', JSON.stringify(data));
      }
      fetchCart();
    } catch (error){
      console.log(error);
    }
  }

  const getUserWishlist = (data) => {
    const userData = data;
    try {
      const fetchWishlist = async () => {
        const res = await fetch(`api/wishlist/${userData.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userData.token}`,
          },
        });
        if (!res.ok){
          throw new Error(`An error occured: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setWishlist(data);
        localStorage.setItem('wishlist', JSON.stringify(data))
      }
      fetchWishlist();
    } catch (error){
      console.log(error);
    }
  }

  const login = async(email, password) => {
    try{
        const fetchLogin = async () => {
            const res = await fetch('api/users/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            if(!res.ok){
                throw new Error(`An error occured: ${res.status}`);
            }
            const data = await res.json();
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            getUserCart(data);
            getUserWishlist(data);
        }
        fetchLogin();
    }catch (error){
        console.log(error);
    }
    
};

const register = async(firstName, lastName, email, password, phone, street, apartment, postal, city, country) => {
  try{
      const fetchRegister = async () => {
          const res = await fetch('api/users/register', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password,
                  phone: phone,
                  street: street,
                  apartment: apartment,
                  zip: postal,
                  city: city,
                  country: country
              })
          });
          if(!res.ok){
              throw new Error(`An error occured: ${res.status}`);
          }
          const data = await res.json();
          setUser(data);
          localStorage.setItem('user', JSON.stringify(data));
      }
      fetchRegister();
  }catch (error){
      console.log(error);
  } 
};

const logout = () => {
  const answer = window.confirm('Are you sure you want to log out?');
        if(answer){
            if(localStorage.user){
                localStorage.removeItem('user');
                localStorage.removeItem('cart');
                localStorage.removeItem('wishlist');
            }; 
            setUser(null);
            setCart([]);
            setWishlist([]);
        } 
}

const addToCart = async (product) => {
  const inCart = cart.find((item) => item._id === product._id);
  const addProductToCart = async () => {
    try {
      const res = await fetch(`api/cart/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          cartItems: [...cart, product._id],
        })
      });
    } catch (error) {
      console.log(error);
    }
  }
  if(!inCart){
    setCart([...cart, product]);
    addProductToCart();
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  }
};

const removeFromCart = async (product) => {
  const answer = window.confirm('Are you sure you want to remove this item from your cart?');
  if(answer){
    setCart(cart.filter((item) => item._id !== product._id));
    localStorage.setItem('cart', JSON.stringify(cart.filter((item) => item._id !== product._id)));
  }
}

const addToWishlist = async (product) => {
  const inWishlist = wishlist.find((item) => item._id === product._id);
  const addProductToWishlist = async () => {
    console.log('adding to wishlist');
    try {
      const res = await fetch(`api/wishlist/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          wishlistItems: [...wishlist, product._id],
        })
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  if(!inWishlist){
    setWishlist([...wishlist, product]);
    addProductToWishlist();
    localStorage.setItem('wishlist', JSON.stringify([...wishlist, product]));
  }
};

const removeFromWishlist = async (product) => {
  const answer = window.confirm('Are you sure you want to remove this item from your wishlist?');
  if(answer){
    setWishlist(wishlist.filter((item) => item._id !== product._id));
    localStorage.setItem('wishlist', JSON.stringify(wishlist.filter((item) => item._id !== product._id)));
  }
}

const productExistsInCart = (product) => {
  const productInCart = cart.find((productInCart) => productInCart._id === product._id);
        if (productInCart) {
            return true;
        }
        else{
            return false;
        }
}

const productExistsInWishlist = (product) => {
  const productInWishlist = wishlist.find((productInWishlist) => productInWishlist._id === product._id);
        if (productInWishlist) {
            return true;
        }
        else{
            return false;
        }
}

  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout user={user} cart={cart} wishlist={wishlist} logout={logout}/>}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop allProducts={allProducts} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist} />} />
            <Route path="cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
            <Route path="wishlist" element={<Wishlist wishlist={wishlist} addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist}/>} />
            <Route path="product-details" element={<ProductDetails addToCart={addToCart} removeFromCart={removeFromCart} productExistsInCart={productExistsInCart} allProducts={allProducts} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} productExistsInWishlist={productExistsInWishlist}/>} />
            <Route path="login" element={<Login login={login} register={register}/>} />
            <Route path="user-profile" element={<UserProfile user={user}/>} />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
