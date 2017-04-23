import React, { Component } from 'react';

import { Surveys } from '../../api/surveys.js';

export default class saveSurvey extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var myCount = 1;
    var answerObj = {};
    this.props.surveyAnswers.map(function(item) {
      answerObj['question' + myCount] = item;
      myCount++;
    });

    Surveys.insert({
      question1: answerObj['question1'],
      question2: answerObj['question2'],
      question3: answerObj['question3'],
      question4: answerObj['question4'],
      question5: answerObj['question5'],
      question6: answerObj['question6'],
      createdAt: new Date(), // current time
    });
  }

  render() {
    return (
      <span>{this.saveAnswers}</span>
    );
  }
}
