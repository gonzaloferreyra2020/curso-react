import React from "react";
import logo from "../images/Burger-King-Logo-CMS.png";

const   Header = () =>{
    return(
        <div className="Container ">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="#"><img src={logo} width= "48" alt="Logo Burger" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Pedí tu combo favorito</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Menú</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Cupones</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;