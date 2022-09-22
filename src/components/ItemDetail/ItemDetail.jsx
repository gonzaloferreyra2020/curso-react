import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item})=>{
    const [quantityToAdd, setQuantityToAdd] = useState(0);

    const onAdd = (quantityToAdd) => {
        setQuantityToAdd(quantityToAdd); 
        
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
                        {
                        quantityToAdd === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> 
                        : <Link to={"/cart"} className="btn">Ir al Carrito</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;