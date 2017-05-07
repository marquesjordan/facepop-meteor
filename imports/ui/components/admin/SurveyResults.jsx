import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { Surveys } from '../../../../imports/api/surveys.js';


class SurveyResults extends Component {

  constructor(props) {
    super(props);

    this.getResults = this.getResults.bind(this);
  }

  componentDidMount() {

  }

  getResults() {
    this.resultTotals = {
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
      question5: 0,
      question6: 0
    }

    const total = this.props.surveys.length;

    this.h = this.props.surveys.map( (item) => {
      return 1+1;
    })

  }

  render() {

    return (
      <div>Hi {this.getResults()}</div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('surveys');

  return {
    surveys: Surveys.find({}).fetch()
  }
}, SurveyResults);
