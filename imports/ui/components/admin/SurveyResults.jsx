import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { Surveys } from '../../../../imports/api/surveys.js';
import { Questions } from '../../../api/questions.js';
import ResultList from './ResultList.jsx';
import SurveyResultList from './SurveyResultList.jsx';

class SurveyResults extends Component {

  constructor(props) {
    super(props);

    this.getResults = this.getResults.bind(this);
  }

  componentDidMount() {

  }

  getResults() {
    debugger;
    return questions.map( (item) => {
      <div key={item._id}>
        text
        <ResultList item={item} />
      </div>
    });
  }

  render() {
    return (
      <div className="container">
        {this.getResults()}
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('surveys');
  Meteor.subscribe('questions');

  return {
    questions: Questions.find({}).fetch(),
    surveys: Surveys.find({}).fetch()
  }
}, SurveyResults);
