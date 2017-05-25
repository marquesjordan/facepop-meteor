import React, { Component } from 'react';
import Slider from 'react-slick';

import Video from './common/Video.jsx';
import IphoneVideo from './common/IphoneVideo.jsx';


export default class Brand extends Component {
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
      <div className="product-section">
      	<div className="container">
      		<div className="row">
            <div className="page-sub-title corp-title">
              CORPORATE BRANDS
            </div>

            <div className="product-content pad-bottom-lg">

              <div className="row pad-bottom-lg">
                <Slider {...settings}>
                  <div className="phone">
                    <IphoneVideo video="201" />
                  </div>
                  <div className="phone">
                    <IphoneVideo video="202" />
                  </div>

                  <div className="phone">
                    <IphoneVideo video="203" />
                  </div>
                </Slider>
              </div>

            </div>
      		</div>
      	</div>
      </div>
    )
  }
}
