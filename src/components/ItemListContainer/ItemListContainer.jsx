import React from 'react';
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Loading from '../Loading/Loading.jsx';

const ItemListContainer = (props) =>{
  const {greeting} = props;
  const [items, setItems] = useState([]);
  const {categoryId} = useParams();
  const [loading,setLoading] = useState(true);
    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items", );
        const queryItems = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }
        });
    },[categoryId]);
  return (
    <div className='container'>
      <h2>{greeting}</h2>
      <h3>Productos disponibles:</h3>
      <div className="row">
        { loading ? <Loading/> : <ItemList items={items}/> }
      </div>
    </div>
  )
}
export default ItemListContainer;