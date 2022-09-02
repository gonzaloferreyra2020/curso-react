import React from 'react';
import cart from "../../images/carrito.png";

 const CartWidget = () => {
  return (
    <div class="container ">
                <a class="cart" href="#"><img src={cart} alt="" width="30" height="24"/>
                </a>
            </div>
  )
}
export default CartWidget;

