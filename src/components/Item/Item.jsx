import React from "react";  

const Item =(props)=>{
const{nombre,imagen,precio}=props;
return(
    <div className="card">
        <img src={imagen} className="card-img-top" alt="imagen "/>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{precio}</p>
            <a href="#" className="btn btn-primary">Seleccionar</a>
        </div>
    </div>
)
}
export default Item;