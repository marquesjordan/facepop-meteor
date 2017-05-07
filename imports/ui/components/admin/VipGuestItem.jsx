import React, { Component } from 'react';

// Task component - represents a single todo item
export default class VipGuestItem extends Component {
  render() {
    return (
      <tr>
        <th></th>
        <th>{this.props.item.email}</th>
        <th>{this.props.item.ip}</th>
        <th>{this.props.item.createdAt.toUTCString()}</th>
      </tr>
    );
  }
}
