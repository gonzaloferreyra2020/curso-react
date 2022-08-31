import React from "react";
import logo from "../../images/Burger-King-Logo-CMS.png";
import CartWidget from "./CartWidget/CartWidget";


const   Navbar = () =>{
    return(
        <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid container-navbar">
          <a class="navbar-brand" href=""><img src={logo} alt="logo" width="48px" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active"  href="#">Pedí tu combo favorito</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Menú</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Cupones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active"  href="">Novedades</a>
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