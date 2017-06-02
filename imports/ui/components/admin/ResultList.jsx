import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Surveys } from '../../../api/surveys.js';
import { Answers } from '../../../api/answers.js';

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.renderAnswers = this.renderAnswers.bind(this);
  }

  componentDidMount() {
  }

  renderAnswers(answers, question) {


    return (
      answers.map( (answer) => {
        var ret = Answers.findOne({question: question, answer:answer.answer});
        var allSurveys = Surveys.find({}).fetch();
        var totalSubmitions = allSurveys.length > 1 ? (allSurveys.length / 6) : 0;
        var percent = totalSubmitions != 0 ? Math.floor((ret.count / totalSubmitions) * 100) : 0;

        return (
          <div key={answer.answer} className="row">
            <div className="col-md-9">
              {answer.answer}
            </div>
            <div className="col-md-3">
              {percent}%
            </div>
          </div>
        )
      }, question)
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
