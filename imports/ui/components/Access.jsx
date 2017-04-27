import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AccessMessage from './AccessMessage';
import Corporate from './Corporate';

export default class Access extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitAccess = this.handleSubmitAccess.bind(this);
  }

  handleSubmitAccess(isRestricted) {
    this.props.onAccessSubmit(isRestricted);
  }

  allAccessSection() {
    if(!this.props.isRestricted) {
      return <AccessMessage />
    }

    return <Corporate handleSubmitAccess={this.handleSubmitAccess} errorMessage={this.props.errorMessage} />
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

          <div className="copy-text pad-bottom-lg">
            USPTO/Patent Pending/File Serial No. 15/355,038<br />
            &copy; 2016 The Facepop Company, All Rights Reserved
          </div>

      	</div>
      </div>
    );
  }
}
