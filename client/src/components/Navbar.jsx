import React from 'react';
import {Link} from 'react-router-dom';
import { BiUser, BiHeart, BiCart } from "react-icons/bi";
import ProfileDropdown from './ProfileDropdown';
import { useState } from 'react';

function Navbar(){
    const [isShown, setIsShown] = useState(false);
    const [stays, setStays] = useState(false);
    const [userExists, setUserExists] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);

    const handleMouseEnter = (e) => {
        setIsShown(true);
    };

    const handleMouseStay = () => {
        setStays(true);
    };

    const handleMouseLeave = () => {
        setIsShown(false);
    };

    const handleMouseOut = () => {
        setStays(false);
    };

    return (
        <div className="header">
        <div className="top-nav">
            <div className="container d-flex">
                <p>Order online or Call us: (000) 2222 5555</p>
                <ul className="d-flex">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className = "navigation">
            <div className = "nav-center container d-flex">
                <h1>.vektor</h1>

                <ul className = "nav-list d-flex">
                    <li className="nav-item"><Link to="/">HOME</Link></li>
                    <li className="nav-item"><Link to="/shop">SHOP</Link></li>
                    <li className="nav-item"><Link to="/about">ABOUT</Link></li>
                    <li className="nav-item"><Link to="/blog">BLOG</Link></li>
                    <li className="nav-item"><Link to="/contact">CONTACT</Link></li>
                </ul>

                <div className="nav-icons d-flex">
                    <Link to={userExists ? "/user-profile" : "/login"} className="icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><BiUser /></Link>
                    <Link to="/wishlist" className="icon"><BiHeart />
                    <span className="d-flex">0</span>
                    </Link>
                    <Link to="/cart" className="icon"><BiCart />
                        <span className="d-flex">0</span>
                    </Link>
                </div>
                {(isShown || stays) && <div className="dropdown-menu" onMouseEnter={handleMouseStay} onMouseLeave={handleMouseOut}>
                        <ProfileDropdown />
                    </div>}
            </div>
        </div>
        </div>
    );
}

export default Navbar;