<<<<<<< HEAD
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
=======
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
>>>>>>> 0b685caf6095a2b6d755af18662a14c633beb365
export default Item;