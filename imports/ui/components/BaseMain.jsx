import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Access from './Access';
import Hero from './Hero';
import Slogan from './Slogan';
import Product from './Product';
import Brand from './Brand';
import Peer from './Peer';
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
    setTimeout(
      function() {
        this.setState({ isRestricted: isRestricted });
      }.bind(this),
      3000
    );
  }

  handleAnswerClick(answer, question) {
    let curQA;
    const arrayAnswers = this.state.userAnswers.slice();

    curQA = { question: question, answer: answer };
    arrayAnswers.push(curQA);
    this.setState({ userAnswers: arrayAnswers });

    const count = this.state.questionCount + 1;
    this.setState({ questionCount: count });
  }

  handleSurvey() {
    if (this.state.questionCount > 6) {
      return <SaveSurvey surveyAnswers={this.state.userAnswers} />;
    }
  }

  render() {
    return (
      <div>
        <Survey
          questionCount={this.state.questionCount}
          onAnswerSubmit={this.handleAnswerClick}
          isRestricted={this.state.isRestricted}
        />

        {this.handleSurvey()}
      </div>
    );
  }
}
