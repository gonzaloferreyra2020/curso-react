import React from "react";
import { useState } from "react";

const ItemCount = (props) =>{
    const {stock,initial,onAdd}=props;
    const [count, setCount] = useState(initial);
    const [itemStock,setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);
    const restarCantidad = (count)=>{
        if (count>0) {
            setCount(count);
        }
    }
    const incrementarCantidad = (count) =>{
        if (itemStock>=count) {
        setCount(count);
        }
    }
    const agregarProductos = ()=>{
        if (count<=itemStock) {
            setItemStock(itemStock-count);
            setItemAdd(itemAdd+count);
        }
    }
    return(
        <div className="text-center">
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button disabled = {count <= 1}  onClick = {()=>{restarCantidad(count-1)}} className="btn btn-primary" type="button">-</button>
                <input type="text" value={count} className="text-center" ></input>
                <button disabled = {count >= itemStock} onClick={()=>{incrementarCantidad(count+1)}} className="btn btn-primary" type="button">+</button>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center pt-3">
                <button disabled = {count > itemStock} onClick={()=>agregarProductos()} type="button" className="btn btn-primary ">Agregar al carrito</button>
            </div>
            <p>Productos seleccionados: {itemAdd}</p>
        </div>
    )
}
export default ItemCount;