import React from 'react';
import {Link} from 'react-router-dom';
import { BiUser, BiHeart, BiCart } from "react-icons/bi";
import ProfileDropdown from './ProfileDropdown';
import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import NavDropdown from './NavDropdown';

function Navbar({user, cart, wishlist, logout}){
    const [isShown, setIsShown] = useState(false);
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [stays, setStays] = useState(false);

    const isWindow = useMediaQuery("(min-width: 800px)");

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

    const toggleDropdownMenu = () => {
        setDropdownMenu(!dropdownMenu);
    };

    return (
        <div className="header">
        <div className="top-nav">
            <div className="container d-flex">
                <p>Order online or Call us: (000) 2222 5555</p>
                <ul className="d-flex">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className = "navigation">
            <div className = "nav-center container d-flex">
                <h1>.vektor</h1>

                {isWindow ? (
                    <ul className = "nav-list d-flex">
                        <li className="nav-item"><Link to="/">HOME</Link></li>
                        <li className="nav-item"><Link to="/shop">SHOP</Link></li>
                        <li className="nav-item"><Link to="/contact">CONTACT</Link></li>
                    </ul>
                ) : (
                    <p onClick={toggleDropdownMenu}>&#9776;</p>
                )}

                <div className="nav-icons d-flex">
                    <Link to={user ? "/user-profile" : "/login"} className="icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><BiUser /></Link>
                    <Link to="/wishlist" className="icon"><BiHeart />
                    <span className="d-flex">{wishlist.length}</span>
                    </Link>
                    <Link to="/cart" className="icon"><BiCart />
                        <span className="d-flex">{cart.length}</span>
                    </Link>
                </div>
                {(isShown || stays) && <div className="dropdown-menu" onMouseEnter={handleMouseStay} onMouseLeave={handleMouseOut}>
                        <ProfileDropdown logout={logout}/>
                    </div>}
                {dropdownMenu && <NavDropdown toggleDropdownMenu={toggleDropdownMenu}/>}
            </div>
        </div>
        </div>
    );
}

export default Navbar;