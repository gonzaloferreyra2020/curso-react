import React from "react";
import logo from "../../images/Burger-King-Logo-CMS.png";
import CartWidget from "./CartWidget/CartWidget";


const   Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid container-navbar">
            <a className="navbar-brand" href=""><img src={logo} alt="logo" width="48px" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active color_navbar"  href="#" >Pedí tu combo favorito</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active color_navbar" href="#">Menú</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active color_navbar" href="#">Cupones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active color_navbar"  href="">Novedades</a>
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