import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { Investors } from '../../../../imports/api/investors.js';
import VipAccessItem from './VipAccessItem.jsx';


class VipAccessList extends Component {

  constructor(props) {
    super(props);

    this.getInvestors = this.getInvestors.bind(this);
  }

  getInvestors() {

    return this.props.investors.map( (item) => {
      return (
        <VipAccessItem item={item} />
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {this.getInvestors()}
        </tbody>
      </table>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('investors');

  return {
    investors: Investors.find({}).fetch()
  }
}, VipAccessList);
