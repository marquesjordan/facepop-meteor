import React, { Component } from 'react';

import Video from './common/Video.jsx';


export default class Product extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    const product1Style = {top: '-73px', left: '-83px'};
    const product2Style = {top: '-73px', left: '-75px'};
    const product3Style = {top: '-73px', left: '-65px'};
    const product4Style = {top: '-70px', left: '-70px'};

    return (
      <div className="product-section">
      	<div className="container">
      		<div className="row">
            <div className="page-title">
              PRODUCT
            </div>

            <Video video="25" isRestricted={this.props.isRestricted} vidStyle={product1Style} />

            <div className="product-content pad-bottom-lg">
            	<div className="main-text pad-bottom-sm">
            		WE ARE AN EMERGING MOBILE APPLICATION MOTIVATED TO RESHAPE YOUR MESSAGING EXPERIENCE WITH A RECOGNIZABLE MOTION VISUAL EFFECT; THE TALKING HEAD.
            	</div>
            	<div className="main-text pad-bottom-sm">
            		THE PATENT PENDING FACEPOP ALGORITHM WILL ALLOW USERS TO CREATE AND SHARE SELF-MADE TALKING HEAD VIDEOS VIA TEXT MESSAGING AND/OR SOCIAL MEDIA PLATFORMS.
            	</div>

              <div className="main-text pad-bottom-lg">
              	YOUR SNAPPY FACEPOP MESSAGE MAY INCLUDE:
              </div>

              <div className="row pad-bottom-lg">

                <div className="col-xs-4">
                  <div className="product-list-group">
                    <ul className="product-list">
                      <li>
                        Greetings
                      </li>
                      <li>
                        Facial Expressions
                      </li>
                      <li>
                        Well Wishes
                      </li>
                    </ul>
                  </div>

                  <div className="product-question">
                    <p className="product-questions">ARE THEY GIFs?</p><p>&nbsp;</p>
                  </div>
                  <div className="product-video-group">
                    <div className="product-video-group__item">
                      <Video video="401" isRestricted={this.props.isRestricted} vidStyle={product2Style} />
                    </div>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="product-list-group">
                    <ul className="product-list">
                      <li>
                        Hot Slang Terms
                      </li>
                      <li>
                        General Messaging
                      </li>
                      <li>
                        Catchphrases
                      </li>
                    </ul>
                  </div>

                  <div className="product-question">
                    <p className="product-questions">ARE THEY PHOTOS?</p>
                  </div>
                  <div className="product-video-group__item">
                    <Video video="402" isRestricted={this.props.isRestricted} vidStyle={product3Style} />
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="product-list-group">
                    <ul className="product-list">
                      <li>
                        Inspirational Quotes
                      </li>
                      <li>
                        Advertisement
                      </li>
                      <li>
                        Notifications
                      </li>
                    </ul>
                  </div>

                  <div className="product-question">
                    <p className="product-questions">ANIMATED EMOJIS?</p>
                  </div>
                  <div className="product-video-group__item pad-bottom-lg">


                    <Video video="403" isRestricted={this.props.isRestricted} vidStyle={product4Style} />
                  </div>
                </div>
              </div>

            </div>
      		</div>
      	</div>
      </div>
    )
  }
}
