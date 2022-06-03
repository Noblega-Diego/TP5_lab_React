
import React from 'react';
import { ProductItem } from './components/Product';
import { getAll } from './service/product.service';


function PanelProducts() {
  return (
    <div className="App">
        {[...getAll()].map((product)=>{
         return <ProductItem Key={product.id} id={product.id}></ProductItem>})}
    </div>
  );
}

export default PanelProducts;
