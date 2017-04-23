import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Access from './components/Access';
import Hero from './components/Hero';
import Slogan from './components/Slogan';
import Product from './components/Product';
import Team from './components/Team';
import Contact from './components/Contact';
import Beta from './components/Beta';
import Survey from './components/Survey';
import SaveSurvey from './components/SaveSurvey';

// App component - represents the whole app
export default class App extends Component {


 constructor(props) {
    super(props);
    this.handleAllAccessSubmit = this.handleAllAccessSubmit.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleSurvey = this.handleSurvey.bind(this);

    this.state = {
      isRestricted: true,
      questionCount: 1,
      userAnswers: [],
      errorMessage: ''
    };
  }

  handleAllAccessSubmit(allAcessCode) {
    const ALL_ACCESS_CODE = "100billion";

    if(allAcessCode === ALL_ACCESS_CODE) {
      this.setState({isRestricted: false, errorMessage: ''});
    } else {
      this.setState({errorMessage: 'Wrong Password'})
    }
  }

  handleAnswerClick(answer) {
    const arrayAnswers = this.state.userAnswers.slice();

    arrayAnswers.push(answer)
    this.setState({ userAnswers: arrayAnswers })

    const count = this.state.questionCount + 1;
    this.setState({questionCount: count});
  }

  handleSurvey() {
    if(this.state.questionCount > 6) {
      return(
        <SaveSurvey surveyAnswers={this.state.userAnswers}></SaveSurvey>
      )
    }
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
        {this.state.isRestricted &&
          <Beta isRestricted={this.state.isRestricted}></Beta>
        }
        {!this.state.isRestricted &&
          <Survey questionCount={this.state.questionCount} onAnswerSubmit={this.handleAnswerClick}></Survey>
        }
        <Contact isRestricted={this.state.isRestricted}></Contact>
        <Access
          isRestricted={this.state.isRestricted}
          onAccessSubmit={this.handleAllAccessSubmit}
          errorMessage={this.state.errorMessage}
        />
        {this.handleSurvey()}
      </div>
    );
  }
}
