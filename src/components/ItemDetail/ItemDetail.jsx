import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item})=>{
    const [counter, setCounter] = useState(0);

    const onAdd = (counter) => {//En el Desafío de Eventos había que crear esta función donde solamente iba a recibir la cantidad de Items. No hace falta pasar por parámetro el Item, porque ya está ese valor en este Componente!
        setCounter(counter); //Cuando se agrega un nuevo Producto, se actualiza el Contador para que desaparezca el ItemCounter y aparezca el botón "Ir Al Carrito"
        
    }

    return(
        <div className="container">
            <div className="card mb-3" >
                <h1 className=" text-center"><b>{item.title}</b></h1>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image}className="img-fluid rounded-start" alt="imagen"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-center">{item.desc}</h5>
                            <p className="card-text text-center">{item.text}</p>
                            <h2 className="card-title">Precio: ${item.price}</h2>
                            <p className="card-text text-center"><small className="text-muted">Stock: {item.stock}</small></p>
                        </div>
                        {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> 
                        : <Link to={"/cart"} className="btn">Ir al Carrito</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;