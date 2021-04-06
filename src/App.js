import './App.css';
import {Container, Row} from 'reactstrap';
import Product from './components/Product.js';
import Navegation from './components/Navegation.js'
import React from 'react';
import {listProducts} from './listProducts.json';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listProducts
    };
  }
  render(){
    const arrayComponents = this.state.listProducts.map(
      (listProducts,i) => {
        return(
          <Product
          key={i}
          title={listProducts.title}
          img={listProducts.img}
          description={listProducts.description}
          ranking={listProducts.ranking}
          price={listProducts.price}
          stock={listProducts.stock}
          />
        )
      }
    );
    return (
      <Container>
        <Navegation title ="Album Patreon"/>
        <Row>
          {arrayComponents}
        </Row>
      </Container>
    );
  }
}

export default App;
