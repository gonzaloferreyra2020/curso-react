import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) =>{

  const{greeting}=props;

  return (
    <div>
        <h2>{greeting}</h2>
        <h3>Productos disponibles:</h3>
        <h3><FontAwesomeIcon icon={faSpinner} /></h3>
        <ItemCount stock={5} initial={1} onAdd={0}/>
    </div>
  )
}
export default ItemListContainer;