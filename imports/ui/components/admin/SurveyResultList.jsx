import React, { Component } from 'react';

export default class SurveyResultList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row" key={this.props.item._id}>
          <div className="col-md-6">
            {this.props.item.question}
          </div>
          <div className="col-md-6">
            text
          </div>
        </div>
      </div>
    );
  }
}
