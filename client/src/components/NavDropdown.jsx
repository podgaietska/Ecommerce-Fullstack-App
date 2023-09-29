import React from "react";
import { Link } from "react-router-dom";

function NavDropdown({toggleDropdownMenu}) {
    return (
        <div className="nav-dropdown">
                <ul className="dropdown-nav-list">
                    <li className="dropdown-nav-item" onClick={toggleDropdownMenu}><Link to="/">HOME</Link></li>
                    <li className="dropdown-nav-item" onClick={toggleDropdownMenu}><Link to="/shop">SHOP</Link></li>
                    <li className="dropdown-nav-item" onClick={toggleDropdownMenu}><Link to="/contact">CONTACT</Link></li>
                </ul>
        </div>
    )
};

export default NavDropdown;