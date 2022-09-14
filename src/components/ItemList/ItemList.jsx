import React from "react";
import Item from "../Item/Item";

const ItemList = (props)=>{
    const{items}=props;
    return(
        <div className="estilo-productos ">
           
                <div>
                    {items.map(product => <Item key={product.id} nombre={product.title} precio={product.price} imagen={product.image} stock={product.stock}/>)}
                </div>
                
        </div>
    )
}
export default ItemList;