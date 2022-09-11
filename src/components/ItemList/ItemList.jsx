<<<<<<< HEAD
import React from "react";
import Item from "../Item/Item";

const ItemList = (props)=>{
    const{items}=props;
    return(
        <div className="container">
             <div className="row-md-6">
            <div className="col-md-4">
                {items.map(product => <Item key={product.id} nombre={product.title} precio={product.price} imagen={product.image} stock={product.stock}/>)}
            </div>
        </div>
        </div>
       
    )
}
=======
import React from "react";
import Item from "../Item/Item";

const ItemList = (props)=>{
    const{items}=props;
    return(
        <div className="container">
             <div className="row-md-6">
            <div className="col-md-4">
                {items.map(product => <Item key={product.id} nombre={product.title} precio={product.price} imagen={product.image} stock={product.stock}/>)}
            </div>
        </div>
        </div>
       
    )
}
>>>>>>> 0b685caf6095a2b6d755af18662a14c633beb365
export default ItemList;