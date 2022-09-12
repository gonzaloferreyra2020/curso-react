import React from "react";

const Item = (props)=>{
    const{nombre,precio,imagen,stock}=props;
    return(
            <div className="card" >
            <img src={imagen} className="card-img-top" alt="imagen"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Precio: ${precio}</p>
                <p>Stock: {stock}</p>
                <a href="#" className="btn btn-primary">ver más</a>
            </div>
        </div>
    )
}
export default Item;