import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Corporate extends Component {
  handleSubmit(event) {
      event.preventDefault();
      const allAcessCode = ReactDOM.findDOMNode(this.refs.allAcessCode).value.trim();

      this.props.handleSubmit(allAcessCode);
  }

  handleBtnClick() {
    debugger;
  }

  render() {
    return (
      <button type="submit"
        onClick={this.handleBtnClick}
        className="btn btn-default btn-access"
      >
        All Access
      </button>
    );
  }
}
