import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import SurveyQuestion from './SurveyQuestions.jsx';
import { Questions } from '../../api/questions.js';


class Survey extends Component {
  constructor(props) {
     super(props);
  }

  getQuestions() {
    return [
      { question: 'Would you download this upcoming free mobile application?',
        answers: [
          {answer: 'A: Yes', count: 0},
          {answer: 'B: No', count: 0},
          {answer: 'C: Most Likely', count: 0},
          {answer: 'D: Probably Not', count: 0},
        ]
      },
      { question: 'Which is a better fit for Facepop?',
        answers: [
          {answer: 'A: A Plug-in Feature Tied to an Existing App', count: 0},
          {answer: 'B: A Default Feature Built in Phones (like emojis)', count: 0},
          {answer: 'C: A Free Mobile App', count: 0},
        ]
      },
      { question: 'Is Facepop better for public use or exclusive for celebrities?',
        answers: [
          {answer: 'A: Public Use', count: 0},
          {answer: 'B: Celebrities', count: 0},
          {answer: 'C: Both A and B', count: 0},
          {answer: 'D: I don’t know', count: 0},
        ]
      },
      { question: 'In your opinion, which time length would you recommend for your snappy Facepop message?',
        answers: [
          {answer: 'A: 3-5 seconds', count: 0},
          {answer: 'B: 5-7 seconds', count: 0},
          {answer: 'C: 7-10 seconds', count: 0},
          {answer: 'D: All of the Above (optional)', count: 0},
        ]
      },
      { question: 'In your opinion, how much is one celebrity Facepop worth to you?',
        answers: [
          {answer: 'A: Free to .49', count: 0},
          {answer: 'B: .49 to .99', count: 0},
          {answer: 'C: .99 to $1.49', count: 0},
          {answer: 'D: $1.49 to $1.99', count: 0},
          {answer: 'E: None of the Above', count: 0},
        ]
      },
      { question: 'How much assistance would you provide when creating your personalized Facepop message?',
        answers: [
          {answer: 'A: None to Little', count: 0},
          {answer: 'B: Little to Medium', count: 0},
          {answer: 'C: Medium to High', count: 0},
          {answer: 'D: None (100% Crop Automation)', count: 0},
        ]
      },
    ];
  }

  renderQuestions() {
    if(Questions.find({}).count() === 0) {
      this.getQuestions().map((question) => {
        Questions.insert(question);
        console.log('done');
      });
    }
  }

  renderText() {
    if(this.props.questionCount > this.renderQuestions().length) {
      return (
        <div>
          <h3>Thank you for your input.</h3>
          <h3>We will use this to make Facepop the #1 App.</h3>
        </div>
      );
    }

    return (
      <div>
        <h3>
          Question {this.props.questionCount} of {this.renderQuestions().length}
        </h3>
      </div>
    );
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
              <div className="pad-bottom-lg">
                {this.renderQuestions()}
              </div>
              <div className="pad-bottom-lg">
                <h3>
                  {this.renderText()}
                </h3>
              </div>
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('questions');

  return {
    questions: Questions.find({}).fetch()
  }
}, Survey);
