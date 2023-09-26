import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout ({user, cart, wishlist}){
    return ( 
    <div className="main">
        <Navbar user={user} cart={cart} wishlist={wishlist}/>
        <Outlet />
        <Footer />
    </div>)
}

export default Layout;