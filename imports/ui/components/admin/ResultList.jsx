import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Surveys } from '../../../api/surveys.js';

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.renderAnswers = this.renderAnswers.bind(this);
  }

  renderAnswers(answers, question) {

    return (
      answers.map( (answer) => {
        return (
          <div key={answer.answer} className="row">
            <div className="col-md-9">
              {answer.answer}
            </div>
            <div className="col-md-3">
              0%
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.question}</td>
        <td>
          {this.renderAnswers(this.props.item.answers, this.props.item.question)}
        </td>
      </tr>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('surveys');

  return {
    surveys: Surveys.find({}).fetch()
  }
}, ResultList);
