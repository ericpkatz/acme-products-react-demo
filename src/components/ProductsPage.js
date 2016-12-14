import React from 'react';

const ProductItem = ({ product, onDestroyProduct})=> {
  return (
      <li onClick={ ()=> onDestroyProduct(product.id) } className='list-group-item'>
        { product.name }
      </li> 
  );

}

const ProductsPage = ({ products, onDestroyProduct })=> {
  const lis = products.map( product => <ProductItem product={product} onDestroyProduct={ onDestroyProduct }  key={ product.id }/>) 
  return (
      <div className='container'>
        <ul className='list-group'>
          { lis }
        </ul>
      </div>
  );
};

export default ProductsPage;
