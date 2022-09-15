import React from "react";
import products from "../../json/json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{

    const [item, setItem] = useState({});
    const {id} = useParams();
    useEffect(() => {
      const getItem = new Promise((resolve, reject) => {
        const producto = products.find((prod)=>prod.id===id);
        setTimeout(()=>{
            resolve(producto)
        },2000);
      });
      getItem.then((data)=>{
        setItem(data)
      });
    },[id]);
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer;