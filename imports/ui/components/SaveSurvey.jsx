import React, { Component } from 'react';

export default class saveSurvey extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var myCount = 1;
    var answerObj = {};
    this.props.surveyAnswers.map(function(item) {
      Surveys.insert(item);
    });
  }

  render() {
    return (
      <span>{this.saveAnswers}</span>
    );
  }
}
