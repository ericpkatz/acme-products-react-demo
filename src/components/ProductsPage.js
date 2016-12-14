import React from 'react';
import ProductForm from './ProductFormComponent';

const ProductItem = ({ product, onDestroyProduct})=> {
  return (
      <li onClick={ ()=> onDestroyProduct(product.id) } className='list-group-item'>
        { product.name }
      </li> 
  );

}

const ProductsList = ({ products, onDestroyProduct}) => {
  const lis = products.map( product => <ProductItem product={product} onDestroyProduct={ onDestroyProduct }  key={ product.id }/>) 
  return (
      <div className='container'>
        <ul className='list-group'>
          { lis }
        </ul>
      </div>
  );
};


const ProductsPage = ({ products, onDestroyProduct, onCreateProduct })=> {
  return (
      <div>
        <ProductForm onCreateProduct={ onCreateProduct }/>
        <ProductsList products={ products } onDestroyProduct={ onDestroyProduct} />
      </div>
  );

};

export default ProductsPage;
