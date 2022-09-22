import React , { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cart from "../../images/carrito.png";
import { CartContext } from '../CartContext/CartContext';
import trash from '../../images/cesto.png';

 const CartWidget = () => {
  const {cartTotal, clear} = useContext(CartContext); 
  return (
    <div className="container">
      <button type="button" className="btn position-relative me-1" title="Vaciar" onClick={()=> {clear()}}>
        <img src={trash} alt="Cesto" />
      </button>
      <NavLink className="cart" to="cart"><img src={cart} alt="" width="30" height="24"/></NavLink>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
    </div>
  )
}
export default CartWidget;

