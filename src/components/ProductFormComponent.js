import React from 'react';

const ProductForm = ( { onCreateProduct })=> {
  let input;
  return (
      <div>
        <div className='form-group'>
          <input className='form-control' ref={ (ref) => input = ref } />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' onClick={ 
            ()=> {
              onCreateProduct(input.value);
              input.value = '';
            }
          }>Insert Product</button>
        </div>
      </div>
  );
}
export default ProductForm;
