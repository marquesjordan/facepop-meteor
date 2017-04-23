import React, { Component } from 'react';

import Join from './Join.jsx';
import Corporate from './Corporate.jsx';
import Thanks from './Thanks.jsx';


export default class Beta extends Component {

  constructor(props) {
    super(props);
    this.handleJoinClick = this.handleJoinClick.bind(this);
    this.renderBeta = this.renderBeta.bind(this);
    this.state = {
      joined: false
    };
  }

  handleJoinClick() {
    this.setState({joined: true});
  }

  renderBeta() {
    if(this.state.joined) {
      return <Thanks />;
    }

    return <Join handleJoinSubmit={this.handleJoinClick} />
  }

  render() {
    return (
      <div className="beta-section">
      	<div className="container">
      		<div className="row">
            <div className="page-title-corporate">
                GET INVOLVED
            </div>

            {this.renderBeta()}

      		</div>
      	</div>
      </div>
    );
  }
}
