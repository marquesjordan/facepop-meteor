import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { Emails } from '../../../../imports/api/emails.js';
import BetaItem from './BetaItem.jsx';


class BetaList extends Component {

  constructor(props) {
    super(props);

    this.getBetaUsers = this.getBetaUsers.bind(this);
  }

  getBetaUsers() {

    return this.props.emails.map( (item) => {
      return (
        <BetaItem item={item} />
      )
    })

  }

  render() {

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Age Group</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {this.getBetaUsers()}
        </tbody>
      </table>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('emails');

  return {
    emails: Emails.find({}).fetch()
  }
}, BetaList);
