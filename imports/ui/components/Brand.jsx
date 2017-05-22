import React, { Component } from 'react';

import Video from './common/Video.jsx';
import IphoneVideo from './common/IphoneVideo.jsx';


export default class Brand extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
      <div className="corp-video-section">
      	<div className="container">
      		<div className="row">
            <div className="page-sub-title corp-title">
              CORPORATE BRANDS
            </div>

            <div className="product-content pad-bottom-lg">

              <div className="row pad-bottom-lg">

                <div className="col-xs-4 phone">
                  <IphoneVideo video="201" />
                </div>
                <div className="col-xs-4 phone">
                  <IphoneVideo video="202" />
                </div>
                <div className="col-xs-4 phone">
                  <IphoneVideo video="203" />
                </div>
              </div>

            </div>
      		</div>
      	</div>
      </div>
    )
  }
}
