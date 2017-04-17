import React, { Component } from 'react';

import Hero from './components/Hero.jsx';
import Slogan from './components/Slogan.jsx';
import Product from './components/Product.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <div>
        <Hero></Hero>
        <Slogan></Slogan>
        <Product></Product>
        <Team></Team>
        <Contact></Contact>
      </div>
    );
  }
}
