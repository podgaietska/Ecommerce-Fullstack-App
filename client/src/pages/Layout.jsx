import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout ({user}){
    return ( 
    <div className="main">
        <Navbar user={user}/>
        <Outlet />
    </div>)
}

export default Layout;