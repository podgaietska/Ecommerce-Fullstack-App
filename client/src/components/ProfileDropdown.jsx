import React from "react";
import {useState} from "react";
import { Link, useLocation } from "react-router-dom";

function ProfileDropdown({logout}) {
    const [userExists, setUserExists] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);
    let location = useLocation();

    const handleLogOut = () => {
        logout();
        window.location.reload();
            if (location.pathname === '/user-profile'){
                window.location.href = '/login';
                } 
    };

    return (
        <div className="profile-dropdown">
                {userExists ? (
                <ul className="user-nav-list">
                    <li className="user-nav-item"><a href="/user-profile">My Account</a></li>
                    <li className="user-nav-item"><a href="/wishlist">My Wishlist</a></li>
                    <li className="user-nav-item"><a href="/cart">My Cart</a></li>
                    <li className="user-nav-item" onClick={handleLogOut}>Log Out</li>
                </ul>
                ) : (
                <ul className="user-nav-list logged-out">
                   <Link to="/login"><li className="user-nav-item">Log in</li></Link>
                </ul>)}
        </div>
    )
};

export default ProfileDropdown;