import React from "react";
import logo from "../../images/Burger-King-Logo-CMS.png";
import CartWidget from "./CartWidget/CartWidget";


const   Navbar = () =>{
    return(
        <div className="navbar navbar-expand-lg ">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <a className="nav-link a-navbar" href="#"><img src={logo} width= "48" alt="Logo Burger" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link a-navbar" href="">Pedí tu combo favorito</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link a-navbar" href="">Menú</a>
                </li>
                <li className="nav-item">
                <a className="nav-link a-navbar" href="">Cupones</a>
                </li>
            </ul>
            
            <CartWidget/>

        </div>
    )
}

export default Navbar;