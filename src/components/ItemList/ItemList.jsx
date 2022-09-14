import React from "react";
import Item from "../Item/Item";

const ItemList = (props)=>{
    const{items}=props;
    return(
        <div className="row ">
            < div className = "col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card-center">
                    {items.map(product => <Item key={product.id} nombre={product.title} precio={product.price} imagen={product.image} stock={product.stock}/>)}
                </div>
                </div>
        </div>
    )
}
export default ItemList;