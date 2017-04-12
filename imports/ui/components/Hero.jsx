import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Hero extends Component {
  render() {
    return (
      <div className="hero-section">
      	<div className="container">
      		<div className="row">
            <div className="col-md-8 col-md-offset-2">
              <img className="img-responsive" src="https://s3-us-west-2.amazonaws.com/facepop/facepop_logo_2017.png" />
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}
