import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Access from './Access';
import Hero from './Hero';
import Slogan from './Slogan';
import Product from './Product';
import Team from './Team';
import Contact from './Contact';
import Beta from './Beta';
import Survey from './Survey';
import SaveSurvey from './SaveSurvey';

// App component - represents the whole app
export default class BaseMain extends Component {


 constructor(props) {
    super(props);
    this.handleAllAccessSubmit = this.handleAllAccessSubmit.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleSurvey = this.handleSurvey.bind(this);

    this.state = {
      isRestricted: true,
      questionCount: 1,
      userAnswers: []
    };
  }

  handleAllAccessSubmit(isRestricted) {
    setTimeout(function() { this.setState({isRestricted: isRestricted}); }.bind(this), 3000);
  }

  handleAnswerClick(answer, question) {
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
