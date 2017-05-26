import React, { Component } from 'react';
import Slider from 'react-slick';

import Video from './common/Video.jsx';
import IphoneVideo from './common/IphoneVideo.jsx';

export default class Peer extends Component {
  constructor(props) {
     super(props);
  }

  render() {

    var settings = {
      arrows: true,
      dots: true,
      infinite: false,
      autoplay: false,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="product-section pad-bottom-lg">
      	<div className="container">
      		<div className="row">

            <div className="page-sub-title corp-title pad-bottom-lg">
              PEER-TO-PEER
            </div>

            <div className="row pad-bottom-lg">
              <Slider {...settings}>

                <div>
                  <IphoneVideo video="204" />
                </div>
                <div>
                  <IphoneVideo video="205" />
                </div>
                <div>
                  <IphoneVideo video="206" />
                </div>

                <div>
                  <IphoneVideo video="207" />
                </div>
                <div>
                  <IphoneVideo video="208" />
                </div>
                <div>
                  <IphoneVideo video="209" />
                </div>
              </Slider>
            </div>

      		</div>
      	</div>
      </div>
    )
  }
}
