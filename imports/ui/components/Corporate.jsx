import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
          <button type="submit" className="btn btn-default btn-access">All Access</button>
          <div className="form-group">
            <label className="sr-only" htmlFor="exampleInputPassword3">All Access</label>
            <input type="password" className="form-control" ref="allAcessCode" id="exampleInputPassword3" placeholder="Password" />
          </div>
        </form>
      </div>
    );
  }
}
