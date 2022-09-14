import React from 'react';
import { NavLink } from 'react-router-dom';
import cart from "../../images/carrito.png";

 const CartWidget = () => {
  return (
    <div className="container">
      <NavLink className="cart" to="cart"><img src={cart} alt="" width="30" height="24"/></NavLink>
    </div>
  )
}
export default CartWidget;

