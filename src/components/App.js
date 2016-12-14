import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Home from './HomePage';
import Products from './ProductsPage';


class App extends Component{
  constructor(){
    super();
    const products = [
      { id: 1, name: 'Foo' },
      { id: 2, name: 'Bar' }
    ];
    this.state = { products: products};
  }
  onDestroyProduct(id){
    this.setState( { products: this.state.products.filter( p=> id !== p.id ) });
  }
  componentDidMount(){
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
        currentPage = <Products onDestroyProduct={ this.onDestroyProduct.bind(this) } products={ this.state.products } />;
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
