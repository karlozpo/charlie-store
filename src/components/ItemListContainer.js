import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList'; 

export default function ItemCardList() {
    
    return(
        <>
        <h3 className="mt-4">Estos son nuestros productos</h3>
         <div className="row">
          <ItemList/>
          </div>
        </>
    )
}

