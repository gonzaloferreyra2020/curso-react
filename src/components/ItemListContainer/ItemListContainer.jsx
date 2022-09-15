import React from 'react';
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
    <div className='container'>
        <h2>{greeting}</h2>
        <h3>Productos disponibles:</h3>
        <div className="row">
          <ItemList items={items}/>
        </div>
    </div>
  )
}
export default ItemListContainer;