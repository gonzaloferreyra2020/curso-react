import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import carrito from "../../images/carrito.png";
import trash from '../../images/cesto.png';

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, cartSuma} = useContext(CartContext);

    return (
        <div className="container">
            {cartTotal() > 0 ?
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={"5"} className="text-end">
                                <Link onClick={() => {clear()}}>
                                    <button className="btn fondo_rojo" title="Vaciar Carrito">Vaciar Carrito <img src={trash} alt="Vaciar Carrito" width="16" /></button>
                                </Link>
                            </td>
                        </tr>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="text-start"><img src={"" + item.image} alt={item.image} title={item.title} width="120" /></td>
                                <td className="text-start align-middle">{item.title}</td>
                                <td className="text-end align-middle">{item.cantidad} x ${item.price}</td>
                                <td className="text-end align-middle">${item.cantidad * item.price}</td>
                                <td className="text-end align-middle">
                                    <Link onClick={() => {removeItem(item.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto" width="24" /></Link>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="text-end fw-bold">Total a Pagar</td>
                            <td className="text-end fw-bold">${cartSuma()}</td>
                            <td className="text-end">
                                <Link to={"/checkout"} title="Finalizar Compra">
                                    <button className="btn fondo_naranja">Finalizar Compra <img src={carrito} alt="Finalizar Compra" width="16" /></button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            : <div className="alert alert-danger text-center" role="alert">No se encontraron Productos!</div>}
        </div>
    )
}

export default Cart;