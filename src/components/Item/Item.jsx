import React from "react";
import { NavLink } from "react-router-dom";

const Item = (props)=>{
const{id,nombre,precio,imagen}=props;
    return(
        <div className="col-12 ml-5 mb-4 col-md-4">
            <div className="card">
                <NavLink to={`/detalle/${id}`}><img src={imagen} className="card-img-top" alt={nombre} /></NavLink>
                <div className="card-body text-center">
                    <h4 className="card-title">{nombre}</h4>
                    <h5 className="card-text">${precio}</h5>
                    <NavLink to={`/detalle/${id}`} className="btn btn-primary">ver más</NavLink>
                </div>
            </div>
        </div>
    )
    }
export default Item;