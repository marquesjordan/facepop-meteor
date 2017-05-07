import React, { Component } from 'react';
import { Investors } from '../../../../imports/api/investors.js';

// Task component - represents a single todo item
export default class VipAccessItem extends Component {
  constructor(props) {
    super(props);

    this.removeInvestor = this.removeInvestor.bind(this);
  }

  removeInvestor(event) {
    Investors.remove(this.props.item._id);
  }

  render() {
    return (
      <tr>
        <th></th>
        <th>{this.props.item.email}</th>
        <th><button className="btn btn-danger"
                    value={this.props.item._id}
                    onClick={this.removeInvestor}>Remove</button></th>
      </tr>
    );
  }
}
