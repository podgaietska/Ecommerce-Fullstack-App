import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {BiRightArrowAlt, BiLeftArrowAlt} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Login({login, user}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [apartment, setApartment] = useState('');
    const [postal, setPostal] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const switchLogin = () => {
        const container = document.getElementById('container');
        container.classList.toggle('right-panel-active');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password)
        navigate('/user-profile');
    }

    const onRegister = (e) => {
        e.preventDefault();
        register(firstName, lastName, email, password, phone, street, apartment, postal, city, country);
        navigate('/user-profile');
    }

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
            }
            fetchRegister();
        }catch (error){
            console.log(error);
        }
    };

    return (
    <div>
    <div className="login-section">
        <div className="container" id="container">
            <div className="form-container register-container">
                <form onSubmit={onRegister}>
                    <h1>Register Here</h1>
                    <div className="input-col">
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="input-col">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-col">
                    <input type="street" placeholder="Street" onChange={(e) => setStreet(e.target.value)}/>
                    <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="input-col">
                    <input type="apartment" placeholder="Apartment Number" onChange={(e) => setApartment(e.target.value)}/>
                    <input type="postal" placeholder="Postal Code" onChange={(e) => setPostal(e.target.value)}/>
                    </div>
                    <div className="input-col">
                    <input type="city" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
                    <input type="country" placeholder="Country" onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                    <button type="submit" value="Submit">Register</button>
                </form>
            </div>
            <div className="form-container login-container">
                <form onSubmit={onSubmit}>
                    <h1>Login Here</h1>
                    <input id="name" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="options">
                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <small>Remember me</small>
                        </div>
                        <div className="pass-link">
                            <a href="#">Forgot password</a>
                        </div>
                    </div>
                    <button type="submit" value="Submit">Login</button>
                    <span>or use your account</span>
                    <div className="social-container">
                        <a href="#"><i className="bx bxl-facebook-square"></i></a>
                        <a href="#"><i className="bx bxl-google"></i></a>
                        <a href="#"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay" style={{backgroundImage: 'url(/login2.jpg)'}}>
                    <div className="overlay-panel overlay-left">
                        <h1 className="title-login">Welcome <br />back</h1>
                        <p>If you have an account, login here</p>
                        <button className="ghost" id="login" onClick={switchLogin}>Login
                            <BiRightArrowAlt className="bx bx-right-arrow-alt login" />
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="title-login">Start your <br />journey now</h1>
                        <p>If you don't have an account, join us</p>
                        <button className="ghost" id="register" onClick={switchLogin}>Register
                            <BiLeftArrowAlt className="bx bx-left-arrow-alt register" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
    )
}

export default Login;