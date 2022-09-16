import React from "react";
import { Link } from "react-router-dom";

const Item = ({info})=>{
    return(
        <div className="col-12 ml-5 mb-4 col-md-4">
            <div className="card">
                <Link to={`/item/${info.id}`}><img src={info.image} className="card-img-top" alt={info.title} /></Link>
                <div className="card-body text-center">
                    <h4 className="card-title">{info.title}</h4>
                    <h5 className="card-text">${info.price}</h5>
                    <Link to={`/item/${info.id}`} className="btn btn-primary">ver más</Link>
                </div>
            </div>
        </div>
    )
    }
export default Item;