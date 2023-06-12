import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <Link to="/orders">Orders</Link>
                <Link to="/products">Products</Link>
                <Link to="/users">Users</Link>
            </nav>
        </header>
    );
}

export default Header;