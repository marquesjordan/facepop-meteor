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

  getResults(questions) {
    return questions.map( (item) => {
      return (
        <tbody key={item._id}>
          <ResultList item={item} />
        </tbody>
      )
    });
  }

  render() {
    return (
      <div className="">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          {this.getResults(this.props.questions)}
        </table>
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
