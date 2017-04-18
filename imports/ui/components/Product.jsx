import React, { Component } from 'react';

import Video from './common/Video.jsx';

// Task component - represents a single todo item
export default class Product extends Component {

  render() {
    return (
      <div className="product-section">
      	<div className="container">
      		<div className="row">
            <div className="page-title">
              PRODUCT
            </div>

            <Video video="25"></Video>

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
                        Dramatic and Comical Expressions
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
                      <Video video="105"></Video>
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
                    <Video video="83"></Video>
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


                    <Video video="40"></Video>
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
