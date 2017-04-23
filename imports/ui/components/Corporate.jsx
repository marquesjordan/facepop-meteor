import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Task component - represents a single todo item
export default class Corporate extends Component {
  handleSubmit(event) {
      event.preventDefault();
      const allAcessCode = ReactDOM.findDOMNode(this.refs.allAcessCode).value.trim();

      this.props.handleSubmit(allAcessCode);
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label className="sr-only" htmlFor="exampleInputPassword3">All Access</label>
            <input type="password" className="form-control" ref="allAcessCode" id="exampleInputPassword3" placeholder="ALL ACCESS" />
          </div>
          <button type="submit" className="btn btn-default">Sign in</button>
        </form>
      </div>
    );
  }
}
