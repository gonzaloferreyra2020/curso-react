import React from "react";
import products from "../../json/json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState,useEffect } from "react";

const ItemDetailContainer = ()=>{

    const [item, setItem] = useState({})
    useEffect(() => {
      const getItem = new Promise((resolve, reject) => {
        const itemProducto = products.find((product) =>product.id===1);
        setTimeout(()=>{
            resolve(itemProducto)
        },2000);
      });
      getItem.then((data)=>{
        setItem(data)
      });
    },[]);
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer;