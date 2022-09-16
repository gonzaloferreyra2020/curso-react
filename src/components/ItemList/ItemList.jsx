import React from "react";
import Item from "../Item/Item";

const ItemList = ({items})=>{
    return(
        items.map(product => <Item key={product.id} info={product}/>)
    )
}
export default ItemList;