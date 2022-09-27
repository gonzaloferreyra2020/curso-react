import React , { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cart from "../../images/carrito.png";
import trash from '../../images/cesto.png';
import { CartContext } from "../CartContext/CartContext";

const CartWidget = () => {
    const {cartTotal, clear} = useContext(CartContext); //Importé las funciones carTotal y Clear.
    //Notese que estoy poniendo la función sin () => {}, porque quiero que se ejecute todo el tiempo.
    //En cambio, en el botón Vaciar Carrito. Si estoy estoy poniendo la función () => {clear()}. Porque solamente se disparará esa función cuando haga click sobre el botón.

    return (
        <div>
            <button type="button" className="btn fondo_naranja position-relative me-1" title="Vaciar Carrito" onClick={()=> {clear()}}>
                <img src={trash} alt="Cesto" width="28" height="28"/>
            </button>
            <NavLink to={"/cart"}>
                <button type="button" className="btn fondo_naranja position-relative" title="Ir al Carrito">
                    <img src={cart} alt="Carrito" width="28" height="28"/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </NavLink>
        </div>
    )
}

export default CartWidget;

