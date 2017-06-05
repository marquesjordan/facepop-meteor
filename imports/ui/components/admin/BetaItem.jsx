import React, { Component } from 'react';
import { Emails } from '../../../../imports/api/emails.js';

// Task component - represents a single todo item
export default class BetaItem extends Component {
  constructor(props) {
    super(props);

    this.removeBetaUser = this.removeBetaUser.bind(this);
  }

  removeBetaUser(event) {
    Emails.remove(this.props.item._id);
  }

  render() {
    return (
      <tr>
        <th></th>
        <th>{this.props.item.email}</th>
        <th>{this.props.item.age}</th>
        <th><button className="btn btn-danger"
                    value={this.props.item._id}
                    onClick={this.removeBetaUser}>Remove</button></th>
      </tr>
    );
  }
}
