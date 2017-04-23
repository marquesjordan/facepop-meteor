import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AccessMessage from './AccessMessage';
import Corporate from './Corporate';


export default class Access extends Component {
  handleSubmit(allAcessCode) {
    this.props.onAccessSubmit(allAcessCode);
  }

  allAccessSection() {
    if(!this.props.isRestricted) {
      return <AccessMessage />
    }

    return <Corporate handleSubmit={this.handleSubmit.bind(this)} errorMessage={this.props.errorMessage} />
  }

  render() {
    return (
      <div className="corp-section">
      	<div className="container">

      		<div className="row">
            <div className="col-sm-4 col-sm-offset-4">

              {this.allAccessSection()}

            </div>
      		</div>

      	</div>
      </div>
    );
  }
}
