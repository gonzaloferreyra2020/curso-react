import React from "react";
import Item from "../Item/Item";

const ItemList =(props)=>{
    const {items}=props;
    return(
        <div className="col">
            <div className="row">
               {items.map(product=> <Item key={product.id} nombre={product.title} imagen={product.image} precio={product.price}/>)}
            </div>
        </div>
    )
}
export default ItemList;