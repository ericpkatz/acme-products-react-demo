import jQuery from 'jquery';
class Store{
  constructor(){
    this.products = [];
    this.subscribers = [];
  }
  subscribe(fn){
    this.subscribers.push(fn);
  }
  createProduct(name){
    let maxId = this.products.reduce( (max, product)=> {
      if(product.id > max)
        max = product.id;
      return max;
    }, 0);
    this.products.push({ id: ++maxId, name: name });
    this.broadcast();
  }
  destroyProduct(id){
    this.products = this.products.filter( (product)=> product.id !== id);
    this.broadcast();
  }
  load(){
    jQuery.get('/api/products')
      .then((result) => {
        this.products = result
        this.broadcast();
      });
  }
  broadcast(){
    this.subscribers.forEach( subscriber => subscriber(this.products));
  }
}

export default Store;
