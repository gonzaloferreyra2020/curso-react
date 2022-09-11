import React from "react";
import Item from "../Item/Item";

const ItemList = (props)=>{
    const{items}=props;
    return(
        <div className="container">
             <div className="row-md-6">
            <div className="col-md-4">
                {items.map(product => <Item key={product.id} nombre={product.title} precio={product.price} imagen={product.image} stock={product.stock}/>)}
            </div>
        </div>
        </div>
       
    )
}
export default ItemList;