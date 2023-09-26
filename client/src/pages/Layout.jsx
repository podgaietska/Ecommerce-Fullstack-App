import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout ({user, cart, wishlist}){
    return ( 
    <div className="main">
        <Navbar user={user} cart={cart} wishlist={wishlist}/>
        <Outlet />
    </div>)
}

export default Layout;