import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Emails } from '../../api/emails.js';

export default class Join extends Component {

  handleSubmit(event) {
      event.preventDefault();
      const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
      const age = ReactDOM.findDOMNode(this.refs.ageSelect).value.trim();

      Emails.insert({
        email,
        age,
        createdAt: new Date(), // current time
      });

      this.props.handleJoinSubmit();
  }

  render() {
    return (
      <div className="join-form">

      		<div className="row pad-bottom-lg">
            <div className="col-md-4 col-md-offset-4">

              <div className="main-text pad-bottom-lg">
                SO YOU WANT TO BECOME ONE OF OUR EXCLUSIVE BETA TESTERS?
              </div>

              <form className="beta-form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" ref="email" placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group">
                  <label htmlFor="ageSelect">Age Group</label>
                  <select id="ageSelect" className="form-control" ref="ageSelect">
                    <option>18 and under</option>
                    <option>12 to 25</option>
                    <option>26 to 34</option>
                    <option>35 and older</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
      		</div>

      </div>
    );
  }
}
