import React, { Component} from 'react';
import PropTypes from 'prop-types';

// Task component - represents a single todo item
export default class SurveyQuestion extends Component {
  constructor(props) {
    super(props);
  }


  renderAnswers() {
    return this.props.question.answers.map((answer) => (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <a className="survey-link"  onClick={this.props.onAnswerSubmit}>
            <div className="survey-btn">
              {answer.answer}
            </div>
          </a>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className={this.props.questionCount === this.props.question._id ? 'active' : 'hidden'}>
        <div className="question-section">
          <h2 className="pad-bottom-lg">{this.props.question.question}</h2>
          {this.renderAnswers()}
        </div>
      </div>
    );
  }
}

SurveyQuestion.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  question: PropTypes.object,
};
