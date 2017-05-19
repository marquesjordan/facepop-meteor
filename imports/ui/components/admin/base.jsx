import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { ReactPivot } from 'react-pivot';

import NavBar from './navbar.jsx';
import SurveyResults from './SurveyResults.jsx';
import VipGuest from './VipGuest.jsx';
import VipAccess from './VipAccess.jsx';
import VipAccessList from './VipAccessList.jsx';



export default class Base extends Component {

  constructor(props) {
     super(props);

     this.state = {
       isAdmin: false,
       errorMessage: ""
     }

     this.handleShowStats = this.handleShowStats.bind(this);
   }

   handleShowStats(event) {
     if(Meteor.userId() && Meteor.user().username === 'facepop_admin') {
       this.setState({isAdmin: true, errorMessage: ""});
     } else {
       this.setState({errorMessage: "You Do Not Have Proper Credentials"})
     }

   }

  render() {
    return (
      <div className="base-section">
        <NavBar />
      	<div className="container">
      		<div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="jumbotron text-center">
                <h1 className="text-center">Admin</h1>
                <button className="btn btn-primary btn-lg" onClick={this.handleShowStats}>Show Stats</button>
                <p className="bg-danger">{this.state.errorMessage}</p>
            </div>

              {this.state.isAdmin &&
                <div id="exTab2" className="">
                  <ul className="nav nav-tabs">
                  	<li className="active">
                      <a  href="#1" data-toggle="tab">VIP Access</a>
                  	</li>
                  	<li><a href="#2" data-toggle="tab">VIP Log</a>
                  	</li>
                  	<li><a href="#3" data-toggle="tab">Survey Results</a>
                  	</li>
                  </ul>

                	<div className="tab-content ">
                	  <div className="tab-pane active" id="1">
                      <VipAccess />
                      <VipAccessList />
                		</div>
                		<div className="tab-pane" id="2">
                      <VipGuest />
                		</div>
                    <div className="tab-pane" id="3">
ddd
                    </div>
                	</div>
                </div>
              }
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}
