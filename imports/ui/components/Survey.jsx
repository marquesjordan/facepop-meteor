import React, { Component } from 'react';
import SurveyQuestion from './SurveyQuestions.jsx';

// Task component - represents a single todo item
export default class Survey extends Component {
  constructor(props) {
     super(props);
  }

  getQuestions() {
    return [
      { _id: 1, question: 'Would you download this upcoming free mobile application?',
        answers: [
          {answer: 'A: Yes'},
          {answer: 'B: No'},
          {answer: 'C: Most Likely'},
          {answer: 'D: Probably Not'},
        ]
      },
      { _id: 2, question: 'Which is a better fit for Facepop?',
        answers: [
          {answer: 'A: A Plug-in Feature Tied to an Existing App'},
          {answer: 'B: A Default Feature Built in Phones (like emojis)'},
          {answer: 'C: A Free Mobile App'},
        ]
      },
      { _id: 3, question: 'Is Facepop better for public use or exclusive for celebrities?',
        answers: [
          {answer: 'A: Public Use'},
          {answer: 'B: Celebrities'},
          {answer: 'C: Both A and B'},
          {answer: 'D: I don’t know'},
        ]
      },
      { _id: 4, question: 'In your opinion, which time length would you recommend for your snappy Facepop message?',
        answers: [
          {answer: 'A: 3-5 seconds'},
          {answer: 'B: 5-7 seconds'},
          {answer: 'C: 7-10 seconds'},
          {answer: 'D: All of the Above (optional)'},
        ]
      },
      { _id: 5, question: 'In your opinion, how much is one celebrity Facepop worth to you?',
        answers: [
          {answer: 'A: Free to .49'},
          {answer: 'B: .49 to .99'},
          {answer: 'C: .99 to $1.49'},
          {answer: 'D: $1.49 to $1.99'},
          {answer: 'E: None of the Above'},
        ]
      },
      { _id: 6, question: 'How much assistance would you provide when creating your personalized Facepop message?',
        answers: [
          {answer: 'A: None to Little'},
          {answer: 'B: Little to Medium'},
          {answer: 'C: Medium to High'},
          {answer: 'D: None (100% Crop Automation)'},
        ]
      },
    ];
  }

  renderQuestions() {
    return this.getQuestions().map((question) => (
      <SurveyQuestion
        key={question._id}
        question={question}
        questionCount={this.props.questionCount}
        onAnswerSubmit={this.props.onAnswerSubmit}
      />
    ));
  }

  render() {
    return (
      <div className="survey-section">
      	<div className="container">
      		<div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="page-title">
                Survey
              </div>
              <div>
                {this.renderQuestions()}
              </div>
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}
