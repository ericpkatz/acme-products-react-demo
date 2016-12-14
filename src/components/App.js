import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Home from './HomePage';
import Products from './ProductsPage';
import Store from '../Store';


class App extends Component{
  constructor(){
    super();
    this.state = { products: [] };
    this.store = new Store();
  }
  onDestroyProduct(id){
    this.store.destroyProduct(id);
  }
  onCreateProduct(name){
    this.store.createProduct(name);
  }
  componentDidMount(){
    this.store.subscribe( products=> this.setState({ products: products }));
    this.store.load();
    const changePage = ()=> {
      const page = window.location.hash ? window.location.hash.slice(1) : 'home';
      this.setState({ page: page });
    }
    window.addEventListener('hashchange', ()=> changePage());
    changePage();
  }
  render(){
    let currentPage;
    switch(this.state.page){
      case 'home':
        currentPage = <Home />;
        break;
      case 'products':
        currentPage = <Products onDestroyProduct={ this.onDestroyProduct.bind(this) } products={ this.state.products } onCreateProduct={ this.onCreateProduct.bind(this) }/>;
        break;
    }

    return (
        <div className='container'>
          <Header />
          <Nav page={ this.state.page }/>
          { currentPage }
        </div>
    );
  }
}

export default App;
