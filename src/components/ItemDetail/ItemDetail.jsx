import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props)=>{
    const{title,image,desc,text,price,stock}=props;
    return(
        <div className="container">
            <div className="card mb-3" >
                <h1 className="text-center">{title}</h1>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image}className="img-fluid rounded-start" alt="imagen"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{desc}</h5>
                        <p className="card-text">{text}</p>
                        <h2 className="card-title">Precio: ${price}</h2>
                        <p className="card-text text-center"><small className="text-muted">Stock: {stock}</small></p>
                        </div>
                        <ItemCount stock={5} initial={1} onAdd={0}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;