import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Burger-King-Logo-CMS.png";
import CartWidget from "../CartWidget/CartWidget";

const   Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid container-navbar">
                <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" width="48px" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown color_navbar">
                            <NavLink className="nav-link dropdown-toggle color_navbar" to="category" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item color_navbar" to="category/carne">Carne</NavLink></li>
                                <li><NavLink className="dropdown-item color_navbar" to="category/pollo">Pollo</NavLink></li>
                                <li><NavLink className="dropdown-item color_navbar" to="category/vegetal">Vegetal</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link color_navbar" to="products">Menú</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  color_navbar" to="coupons">Cupones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  color_navbar"  to="news">Novedades</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;