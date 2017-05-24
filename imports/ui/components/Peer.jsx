import React, { Component } from 'react';

import Video from './common/Video.jsx';


export default class Peer extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
      <div className="product-section">
      	<div className="container">
      		<div className="row">

            <div className="page-sub-title corp-title">
              PEER-TO-PEER
            </div>

            <div className="row pad-bottom-lg">
              <div className="col-xs-4">
                <div className="product-video-group">
                  <div className="product-video-group__item">
                    <Video video="204" />
                  </div>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="product-video-group__item">
                  <Video video="205" />
                </div>
              </div>
              <div className="col-xs-4">
                <div className="product-video-group__item pad-bottom-lg">
                  <Video video="206" />
                </div>
              </div>
            </div>

            <div className="row pad-bottom-lg">
              <div className="col-xs-4">
                <div className="product-video-group">
                  <div className="product-video-group__item">
                    <Video video="207" />
                  </div>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="product-video-group__item">
                  <Video video="208" />
                </div>
              </div>
              <div className="col-xs-4">
                <div className="product-video-group__item pad-bottom-lg">
                  <Video video="209" />
                </div>
              </div>
            </div>

      		</div>
      	</div>
      </div>
    )
  }
}
