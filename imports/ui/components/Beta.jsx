import React, { Component } from 'react';

import Join from './Join.jsx';
import Corporate from './Corporate.jsx';
import Thanks from './Thanks.jsx';

// Task component - represents a single todo item
export default class Beta extends Component {

  constructor(props) {
    super(props);
    this.handleJoinClick = this.handleJoinClick.bind(this);
    this.handleCorpClick = this.handleCorpClick.bind(this);
    this.state = {
      join: false,
      corp: false
    };
  }

  handleJoinClick() {
    this.setState({join: true, corp: false});
  }

  handleCorpClick() {
    this.setState({corp: true, join: false});
  }

  render() {
    const isJoin = this.state.join;
    const isCorp = this.state.corp;

    let myForm = null;
    if (isJoin) {
      myForm = <Join />;
    }

    if (isCorp) {
      myForm = <Corporate />;
    }

    return (
      <div className="beta-section">
      	<div className="container">
      		<div className="row">
            <div className="page-title-corporate">
                GET INVOLVED
            </div>

            <div className="row">
              <div className="col-md-8 col-md-offset-2">

                <div className="pad-bottom-lg">
                  <div className="btn-group btn-group-justified" role="group" aria-label="...">
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-primary" onClick={this.handleJoinClick}>Join The Group</button>
                    </div>
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-default" onClick={this.handleCorpClick}>All Access</button>
                    </div>
                  </div>
                </div>



              </div>
            </div>

            {myForm}

      		</div>
      	</div>
      </div>
    );
  }
}
