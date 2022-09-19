import React from 'react';
import { useState,useEffect } from "react";
import products from '../../json/json.js';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
const ItemListContainer = (props) =>{
  const{greeting}=props;
  const [items, setItems] = useState([]);
  const{categoryId}=useParams();
    useEffect(() => {
      const getItems = new Promise(resolve => {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      });
      if (categoryId) {
        getItems.then(data=>
          setItems(data.filter(product=>product.category===categoryId)))
      }else{
        getItems.then(data=>
          setItems(data)
        );
      }
      
    },[categoryId]);
  
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