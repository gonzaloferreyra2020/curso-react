import React from "react";
import Item from "../Item/Item";

const ItemList = (props)=>{
    const{items}=props;
    return(
        items.map(product => <Item key={product.id} nombre={product.title} precio={product.price} imagen={product.image} stock={product.stock}/>)
    )
}
export default ItemList;