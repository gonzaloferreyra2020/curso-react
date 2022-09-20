import React from "react";
import products from "../../json/json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
  const [item, setItem] = useState({});
  const {itemId} = useParams();
    useEffect(() => {
      const getItem = new Promise(resolve => {
        setTimeout(()=>{
            resolve(products)
        },2000);
      });
      getItem.then(res => setItem(res.find(data => data.id===parseInt(itemId))));
    },[itemId]);
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer;