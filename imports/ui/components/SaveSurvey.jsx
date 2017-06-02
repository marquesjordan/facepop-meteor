import React, { Component } from 'react';
import { Answers } from '../../api/answers.js';
import { Surveys } from '../../api/surveys.js';

export default class saveSurvey extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var myCount = 1;
    var answerObj = {};
    this.props.surveyAnswers.map(function(item) {
      Surveys.insert(item);
      var doc = Answers.findOne({question: item.question, answer: item.answer});
      Answers.update(
        { _id: doc._id },
        {$inc: {count: 1}}
      );
    });
  }

  render() {
    return (
      <span>{this.saveAnswers}</span>
    );
  }
}
