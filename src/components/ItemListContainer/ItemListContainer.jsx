import React from 'react';
import { useState,useEffect } from "react";
import products from '../../json/json.js';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) =>{
  const{greeting}=props;
  const [items, setItems] = useState([]);
    useEffect(() => {
      const getItems = new Promise(resolve => {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      });
      getItems.then((data)=>{
        setItems(data)
      });
    },[]);
  
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