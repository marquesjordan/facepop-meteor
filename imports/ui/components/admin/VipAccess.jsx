import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Investors } from '../../../api/investors.js';

export default class VipAccess extends Component {

  handleSubmit(event) {
      event.preventDefault();
      const email = ReactDOM.findDOMNode(this.refs.email).value.trim();

      Investors.insert({
        email,
        createdAt: new Date(), // current time
      });

      ReactDOM.findDOMNode(this.refs.email).value = "";
  }

  render() {
    return (
      <div className="join-form">

      		<div className="row pad-bottom-lg">
            <div className="col-md-12">

              <div className="text-left">
                <h3>Add Email Address</h3>
              </div>

              <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control addInvestorInput" id="email" ref="email" placeholder="Email Address" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
              </form>
            </div>
      		</div>

      </div>
    );
  }
}
