import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class AdminLogin extends Component {

  handleAdminLogin(event) {
      event.preventDefault();
      const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
      const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

      this.props.handleAdminLogin();
  }

  render() {
    return (
      <div className="admin-form">
      		<div className="row pad-bottom-lg">
            <div className="col-md-4 col-md-offset-4">

              <div className="main-text pad-bottom-lg">
                Admin Login:
              </div>

              <form className="beta-form" onSubmit={this.handleAdminLogin.bind(this)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" ref="email" placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" ref="password" placeholder="Enter Your Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
      		</div>

      </div>
    );
  }
}
