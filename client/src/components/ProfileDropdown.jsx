import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";

function ProfileDropdown() {
    const [userExists, setUserExists] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);
    const handleLogOut = () => {
        if(localStorage.user){
            localStorage.removeItem('user');
            window.location.reload();
        };   
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