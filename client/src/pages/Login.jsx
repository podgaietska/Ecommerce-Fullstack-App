import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login({login, register, user}){
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

    useEffect(() => {
        if (user) navigate('/user-profile');
    }, [user]);

    const switchLogin = () => {
        const container = document.getElementById('container');
        container.classList.toggle('right-panel-active');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }

    const onRegister = (e) => {
        e.preventDefault();
        toast.promise(register(firstName, lastName, email, password, phone, street, apartment, postal, city, country), {
            pending: 'Registering...',
            success: 'Registered successfully',
            error: 'Error registering'
        });    
    }

    return (
    <div>
    <div className="login-section">
        <div className="container" id="container">
            <div className="form-container register-container">
                <form onSubmit={onRegister}>
                    <h1>Register Here</h1>
                    <div className="input-col">
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required/>
                    <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required/>
                    </div>
                    <div className="input-col">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="input-col">
                    <input type="street" placeholder="Street" onChange={(e) => setStreet(e.target.value)} required/>
                    <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                    <div className="input-col">
                    <input type="apartment" placeholder="Apartment Number" onChange={(e) => setApartment(e.target.value)} required/>
                    <input type="postal" placeholder="Postal Code" onChange={(e) => setPostal(e.target.value)} required/>
                    </div>
                    <div className="input-col">
                    <input type="city" placeholder="City" onChange={(e) => setCity(e.target.value)} required/>
                    <input type="country" placeholder="Country" onChange={(e) => setCountry(e.target.value)} required/>
                    </div>
                    <button type="submit" value="Submit">Register</button>
                </form>
            </div>
            <div className="form-container login-container">
                <form onSubmit={onSubmit}>
                    <h1>Login Here</h1>
                    <input id="name" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                    <input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    <div className="options">
                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <small>Remember me</small>
                        </div>
                        <div className="pass-link">
                            <div>Forgot password</div>
                        </div>
                    </div>
                    <button type="submit" value="Submit">Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay" style={{backgroundImage: 'url(/login2.jpg)'}}>
                    <div className="overlay-panel overlay-left">
                        <h1 className="title-login">Welcome <br />back</h1>
                        <p>If you have an account, click below to login</p>
                        <button className="ghost" id="login" onClick={switchLogin}>Login
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="title-login">Start your <br />journey now</h1>
                        <p>If you don't have an account, join us! Click below to register</p>
                        <button className="ghost" id="register" onClick={switchLogin}>Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Login;