import React from "react";
import products from "../../json/json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{

    const [item, setItem] = useState({});
    const { detalleId } = useParams();
    useEffect(() => {
      const getItem = new Promise((resolve, reject) => {
        const itemProducto = products.find((product) =>product.id===parseInt(detalleId));
        setTimeout(()=>{
            resolve(itemProducto)
        },2000);
      });
      getItem.then((data)=>{
        setItem(data)
      });
    },[detalleId]);
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer;