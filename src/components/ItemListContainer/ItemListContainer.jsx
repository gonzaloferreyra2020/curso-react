import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState,useEffect } from "react";
import products from '../../json/json.js';
import ItemList from "../ItemList/ItemList";
const ItemListContainer = (props) =>{

  const{greeting}=props;
  const [items, setItems] = useState([]);
  useEffect(() => {
    const promesa = new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve(products)
      },2000);
    });
    promesa.then((respuesta)=>{
      setItems(respuesta);
      console.log(respuesta);
    });
  });
  

  return (
    <div>
        <h2>{greeting}</h2>
        <h3><i className="fa-solid fa-spinner"></i></h3>
        <ItemCount stock={5} initial={1} onAdd={0}/>
        <h3>Productos disponibles:</h3>
        <ItemList items={items}/>
    </div>
  )
}
export default ItemListContainer;