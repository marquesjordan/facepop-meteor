import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import { Vips } from '../../../../imports/api/vip.js';
import VipGuestItem from './VipGuestItem.jsx';


class VipGuest extends Component {

  constructor(props) {
    super(props);

    this.getVips = this.getVips.bind(this);
  }

  getVips() {

    return this.props.vips.map( (item) => {
      return (
        <VipGuestItem item={item} />
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
            <th>IP Address</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
            {this.getVips()}
        </tbody>
      </table>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('vips');

  return {
    vips: Vips.find({}).fetch()
  }
}, VipGuest);
