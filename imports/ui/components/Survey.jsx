import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Answers } from '../../api/answers.js';

import SurveyQuestion from './SurveyQuestions.jsx';
import Slider from 'react-slick';
import Video from './common/Video.jsx';

class Survey extends Component {
  constructor(props) {
     super(props);

     this.next = this.next.bind(this)
     this.getAnswerList = this.getAnswerList.bind(this);
     this.getQuestions = this.getQuestions.bind(this);
  }

  next(answer, question) {

    this.props.onAnswerSubmit(answer, question);

  }

  getAnswerList() {
    return [
          {question: "Would you download this upcoming free mobile application?", answer: "A: Yes", count: 0},
          {question: "Would you download this upcoming free mobile application?", answer: "B: No", count: 0},
          {question: "Would you download this upcoming free mobile application?", answer: "C: Most Likely", count: 0},
          {question: "Would you download this upcoming free mobile application?", answer: "D: Probably Not", count: 0},
          {question: "Which is a better fit for Facepop?", answer: "A: A Plug-in Feature Tied to an Existing App", count: 0},
          {question: "Which is a better fit for Facepop?", answer: "B: A Default Feature Built in Phones (like emojis)", count: 0},
          {question: "Which is a better fit for Facepop?", answer: "C: A Free Mobile App", count: 0},
          {question: "Is Facepop better for public use or exclusive for celebrities?", answer: "A: Public Use", count: 0},
          {question: "Is Facepop better for public use or exclusive for celebrities?", answer: "B: Celebrities", count: 0},
          {question: "Is Facepop better for public use or exclusive for celebrities?", answer: "C: Both A and B", count: 0},
          {question: "Is Facepop better for public use or exclusive for celebrities?",answer: "D: I don’t know", count: 0},
          {question: "In your opinion, which time length would you recommend for your snappy Facepop message?", answer: "A: 3-5 seconds", count: 0},
          {question: "In your opinion, which time length would you recommend for your snappy Facepop message?", answer: "B: 5-7 seconds", count: 0},
          {question: "In your opinion, which time length would you recommend for your snappy Facepop message?", answer: "C: 7-10 seconds", count: 0},
          {question: "In your opinion, which time length would you recommend for your snappy Facepop message?", answer: "D: All of the Above (optional)", count: 0},
          {question: "In your opinion, how much is one celebrity Facepop worth to you?", answer: "A: Free to .49", count: 0},
          {question: "In your opinion, how much is one celebrity Facepop worth to you?", answer: "B: .49 to .99", count: 0},
          {question: "In your opinion, how much is one celebrity Facepop worth to you?", answer: "C: .99 to $1.49", count: 0},
          {question: "In your opinion, how much is one celebrity Facepop worth to you?", answer: "D: $1.49 to $1.99", count: 0},
          {question: "In your opinion, how much is one celebrity Facepop worth to you?", answer: "E: None of the Above", count: 0},
          {question: "How much assistance would you provide when creating your personalized Facepop message?", answer: "A: None to Little", count: 0},
          {question: "How much assistance would you provide when creating your personalized Facepop message?", answer: "B: Little to Medium", count: 0},
          {question: "How much assistance would you provide when creating your personalized Facepop message?", answer: "C: Medium to High", count: 0},
          {question: "How much assistance would you provide when creating your personalized Facepop message?", answer: "D: None (100% Crop Automation)", count: 0},
    ];
  }

  getQuestions() {
    return [
      { _id: 1, question: 'Would you download this upcoming free mobile application?',
        answers: [
          {answer: 'A: Yes', count: 0},
          {answer: 'B: No', count: 0},
          {answer: 'C: Most Likely', count: 0},
          {answer: 'D: Probably Not', count: 0},
        ]
      },
      { _id: 2, question: 'Which is a better fit for Facepop?',
        answers: [
          {answer: 'A: A Plug-in Feature Tied to an Existing App', count: 0},
          {answer: 'B: A Default Feature Built in Phones (like emojis)', count: 0},
          {answer: 'C: A Free Mobile App', count: 0},
        ]
      },
      { _id: 3, question: 'Is Facepop better for public use or exclusive for celebrities?',
        answers: [
          {answer: 'A: Public Use', count: 0},
          {answer: 'B: Celebrities', count: 0},
          {answer: 'C: Both A and B', count: 0},
          {answer: 'D: I don’t know', count: 0},
        ]
      },
      { _id: 4, question: 'In your opinion, which time length would you recommend for your snappy Facepop message?',
        answers: [
          {answer: 'A: 3-5 seconds', count: 0},
          {answer: 'B: 5-7 seconds', count: 0},
          {answer: 'C: 7-10 seconds', count: 0},
          {answer: 'D: All of the Above (optional)', count: 0},
        ]
      },
      { _id: 5, question: 'In your opinion, how much is one celebrity Facepop worth to you?',
        answers: [
          {answer: 'A: Free to .49', count: 0},
          {answer: 'B: .49 to .99', count: 0},
          {answer: 'C: .99 to $1.49', count: 0},
          {answer: 'D: $1.49 to $1.99', count: 0},
          {answer: 'E: None of the Above', count: 0},
        ]
      },
      { _id: 6, question: 'How much assistance would you provide when creating your personalized Facepop message?',
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
    if(this.props.answers.length < 1) {
      this.getAnswerList().map( (answer) => {
        Answers.insert(answer);
      })
    }


    return this.getQuestions().map((question) => (
      <div key={question._id}>
        <SurveyQuestion
          question={question}
          questionCount={this.props.questionCount}
          onAnswerSubmit={this.next}
        />
      </div>

    ));
  }

  renderText() {
    if(this.props.questionCount > this.getQuestions().length) {
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
          Question {this.props.questionCount} of {this.getQuestions().length}
        </h3>
      </div>
    );
  }

  render() {
    var settings = {
      arrows: false,
      dots: false,
      infinite: false,
      autoplay: false,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const surveyStyle = {top: '-76px', left: '-78px'};

    return (
      <div className="survey-section">
      	<div className="container">
      		<div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="page-title">
                Survey
              </div>
              <div>
                <Video video="404" isRestricted={this.props.isRestricted} vidStyle={surveyStyle} />
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

export default createContainer((props) => {
  Meteor.subscribe('answers');

  return {
    answers: Answers.find({}).fetch()
  }
}, Survey);
