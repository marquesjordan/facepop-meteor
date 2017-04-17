import React, { Component } from 'react';

import Join from './Join.jsx';
import Thanks from './Thanks.jsx';

// Task component - represents a single todo item
export default class Corporate extends Component {
  render() {
    return (
      <div className="corporate-section">
      	<div className="container">
      		<div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form className="form-horizontal">
                <div className="form-group">
                  <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}
