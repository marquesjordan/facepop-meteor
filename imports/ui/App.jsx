import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hero from './components/Hero.jsx';
import Slogan from './components/Slogan.jsx';
import Product from './components/Product.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Beta from './components/Beta.jsx';
import Survey from './components/Survey.jsx';

// App component - represents the whole app
export default class App extends Component {


 constructor(props) {
    super(props);
    this.handleAllAccessSubmit = this.handleAllAccessSubmit.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);

    this.state = {
      isRestricted: true,
      questionCount: 1
    };
  }

  handleAllAccessSubmit(allAcessCode) {
    const ALL_ACCESS_CODE = "100billion";

    if(allAcessCode === ALL_ACCESS_CODE) {
      this.setState({isRestricted: false});
    }
  }


  handleAnswerClick(event) {
    const count = this.state.questionCount + 1;
    this.setState({questionCount: count});
  }

  render() {
    return (
      <div>

        <Hero></Hero>
        <Slogan></Slogan>
        {!this.state.isRestricted &&
          <Product isRestricted={this.state.isRestricted}></Product>
        }

        <Team isRestricted={this.state.isRestricted}></Team>
        <Beta isRestricted={this.state.isRestricted} onAccessSubmit={this.handleAllAccessSubmit}></Beta>
        <Survey questionCount={this.state.questionCount} onAnswerSubmit={this.handleAnswerClick}></Survey>
        <Contact isRestricted={this.state.isRestricted}></Contact>
      </div>
    );
  }
}
