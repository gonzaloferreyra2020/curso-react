import React from "react";
import { NavLink } from "react-router-dom";

const   Footer = () =>{
    return(
    <div className="fondo_footer">
        <div className="container text-white">
            <div className="row">
                <div className="col-md-4">
                    <h3 className="text-light">BURGER KING</h3>
                </div>
                <div className="col-md-2">
                    <h4>Info BK</h4>
                    <ul>
                        <li className="nav-item lista_footer">
                            <NavLink to="products" className="nav-link active ">Menú</NavLink> </li>
                        <li>
                            <NavLink to="" className="nav-link active">Home</NavLink> 
                        </li>
                        <li>
                            <NavLink to="coupons" className="nav-link active">Cupones</NavLink>
                        </li>
                        <li>
                            <NavLink to="news" className="nav-link active">Novedades</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>Información</h4>
                    <ul>
                        <li>SiteMap</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>My BK</h4>
                    <ul>
                        <li>Contáctanos</li>
                        <li>Empleo</li>
                        <li>Delivery</li>
                        <li>Política de privacidad</li>
                        <li>Defensa de las y los consumidores</li>
                    </ul>
                </div>
                <hr />
                <div className="col-md-12 ">
                    <p className="text-light">TM © 2021 Burger King Corporation. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer;
