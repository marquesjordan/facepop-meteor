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
    this.onAccessSubmited = this.onAccessSubmited.bind(this);
    this.state = {
      join: false,
      corp: false
    };
  }

  onAccessSubmited(allAcessCode) {
    this.props.onAccessSubmit(allAcessCode)
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

    return (
      <div className="beta-section">
      	<div className="container">
      		<div className="row">
            <div className="page-title-corporate">
                GET INVOLVED
            </div>

            <Join />

      		</div>
      	</div>
      </div>
    );
  }
}
