import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const ItemListContainer = (props) =>{

  const{greeting}=props;

  return (
    <div>
        <h2>{greeting}</h2>
        <h3>Productos disponibles:</h3>
        <h3><FontAwesomeIcon icon={faSpinner} /></h3>
    </div>
  )
}
export default ItemListContainer;