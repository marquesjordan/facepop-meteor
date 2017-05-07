import React, { Component } from 'react';
import Accounts from './Account.jsx';

export default class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img className="nav-icon" alt="Facepop" src="https://s3-us-west-2.amazonaws.com/facepop/facepop_logo_2017.png" />
            </a>
            <Accounts />
          </div>
        </div>
      </nav>
    );
  }
}
