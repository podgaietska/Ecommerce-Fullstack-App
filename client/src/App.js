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

  const login = (email, password) => {
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
        }
        fetchLogin();
    }catch (error){
        console.log(error);
    }
};

const register = (firstName, lastName, email, password, phone, street, apartment, postal, city, country) => {
  try{
      const fetchRegister = async () => {
          console.log('registring');
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

  // const addToCart = (product) => {

  // } 

  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout user={user}/>}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="login" element={<Login login={login} register={register}/>} />
            <Route path="user-profile" element={<UserProfile user={user}/>} />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
