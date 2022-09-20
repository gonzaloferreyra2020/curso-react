import React from "react";
import { useState , useEffect} from "react";
import Item from "../Item/Item";

const ItemCount = (props) =>{
    const {stock,initial,onAdd}=props;
    const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);
    return(
        <div className="text-center">
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button disabled = {count <= 1} onChange={()=>{}}  onClick = {decrease} className="btn btn-primary" type="button">-</button>
                <input type="text" value={count} onChange={()=>{}} className="text-center" ></input>
                <button disabled = {count >= Item.stock} onChange={()=>{}} onClick={increase} className="btn btn-primary" type="button">+</button>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center pt-3">
                <button disabled = {count > Item.stock} onChange={()=>{}} onClick={()=>onAdd(count)} type="button" className="btn btn-primary ">Agregar al carrito</button>
            </div>
            <p>Productos seleccionados: {count}</p>
        </div>
    )
}
export default ItemCount;