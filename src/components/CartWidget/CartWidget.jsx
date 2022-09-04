import React from 'react';
import cart from "../../images/carrito.png";

 const CartWidget = () => {
  return (
    <div className="container">
      <a className="cart" href="#"><img src={cart} alt="" width="30" height="24"/></a>
    </div>
  )
}
export default CartWidget;

