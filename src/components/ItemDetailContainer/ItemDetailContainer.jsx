import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from '../Loading/Loading.jsx';
import { getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {itemId} = useParams();
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const response = doc(db, "items", itemId);
    getDoc(response).then((snapShot) => {
        if (snapShot.exists()) {
            setItem({itemId:snapShot.itemId, ...snapShot.data()});
            setLoading(false);
        }            
    });
}, [itemId]);
  return(
    <div className="container">
      {loading ? <Loading /> : <ItemDetail item={item} />}
    </div>
  )
}
export default ItemDetailContainer;