import React, { Component } from 'react';

import Join from './Join.jsx';
import Corporate from './Corporate.jsx';
import Thanks from './Thanks.jsx';

// Task component - represents a single todo item
export default class Beta extends Component {
  render() {
    return (
      <div className="beta-section">
      	<div className="container">
      		<div className="row">
            <div className="page-title-corporate">
                GET ENVOLVED
            </div>

            <div className="row">
              <div className="col-md-8 col-md-offset-2">

                <div className="pad-bottom-lg">
                  <div className="btn-group btn-group-justified" role="group" aria-label="...">
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-primary">Join The Group</button>
                    </div>
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-default">Corporate</button>
                    </div>
                  </div>
                </div>



              </div>
            </div>

            <Join></Join>
            <Thanks></Thanks>
            <Corporate></Corporate>

      		</div>
      	</div>
      </div>
    );
  }
}
