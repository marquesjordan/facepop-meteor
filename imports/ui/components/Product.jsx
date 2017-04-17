import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Product extends Component {
  playPause(id) {
    // debugger;
    const clicked_video = `video${id}`;
    const myVideo = document.getElementById(clicked_video);
    const controllerImage = document.getElementById(id);

    if (myVideo.paused) {
        myVideo.play();
        $('#'+id).hide();
    }

    myVideo.onended = function() {
      $('#'+id).show();
      controllerImage.src = 'https://s3-us-west-2.amazonaws.com/facepop/play-button.png';
    };
  }

  render() {
    return (
      <div className="product-section">
      	<div className="container">
      		<div className="row">
            <div className="page-title">
              PRODUCT
            </div>

            <div className="product-video-container pad-bottom-lg">
              <div className="video-mask">
                <video poster="https://s3-us-west-2.amazonaws.com/facepop/poster25.png" id="video25" className="contact-video-footer">
                  <source src="https://s3-us-west-2.amazonaws.com/facepop/video/video-25.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
                <img id="25" ref="25" className="play-button product-video-play-image" onClick={this.playPause.bind(this, '25')} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
              </div>
            </div>

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

                      <div className="product-video-container pad-bottom-lg">
                        <div className="video-mask contact-video-mask">
                          <video poster="https://s3-us-west-2.amazonaws.com/facepop/poster105.png" id="video105" className="contact-video-footer">
                            <source src="https://s3-us-west-2.amazonaws.com/facepop/video/video-105.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                          </video>
                          <img id="105" className="play-button product-video-play-image" onClick={this.playPause.bind(this, '105')} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
                        </div>
                      </div>
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

                    <div className="product-video-container pad-bottom-lg">
                      <div className="video-mask contact-video-mask">
                        <video poster="https://s3-us-west-2.amazonaws.com/facepop/poster83.png" id="video83" className="contact-video-footer">
                          <source src="https://s3-us-west-2.amazonaws.com/facepop/video/video-83.mp4" type="video/mp4" />
                          Your browser does not support HTML5 video.
                        </video>
                        <img id="83" className="play-button product-video-play-image" onClick={this.playPause.bind(this, '83')} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
                      </div>
                    </div>
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
                  <div className="product-video-group__item">

                    <div className="product-video-container pad-bottom-lg">
                      <div className="video-mask contact-video-mask">
                        <video poster="https://s3-us-west-2.amazonaws.com/facepop/poster75.png" id="video40" className="contact-video-footer">
                          <source src="https://s3-us-west-2.amazonaws.com/facepop/video/video-40.mp4" type="video/mp4" />
                          Your browser does not support HTML5 video.
                        </video>
                        <img id="40" className="play-button product-video-play-image" onClick={this.playPause.bind(this, '40')} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
                      </div>
                    </div>
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
