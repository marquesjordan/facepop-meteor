import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Contact extends Component {
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
      <div className="contact-section">
      	<div className="container">
      		<div className="row">


          	<div className="page-title">
            		CONTACT
          	</div>
          	<div className="pad-bottom-lg">
          		 <div className="product-video-container">
          	      <div className="video-mask contact-video-mask">
          	        <video poster="https://s3-us-west-2.amazonaws.com/facepop/poster75.png" id="video75" className="contact-video-footer">
          	          <source src="https://s3-us-west-2.amazonaws.com/facepop/video/video-75.mp4" type="video/mp4" />
          	          Your browser does not support HTML5 video.
          	        </video>
          	        <img id="75" className="play-button product-video-play-image" onClick={this.playPause.bind(this, '75')} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
          	      </div>
          	     </div>
              </div>
          	<div>
          		<div className="main-text pad-bottom-sm">
          			IN THE NEAR FUTURE, THE POWER OF FAST MESSAGING AND SHORT VIDEO WILL TRULY BE IN YOUR HANDS!
          		</div>
          		<div className="main-text pad-bottom-sm">info@facepopme.com</div>
          	</div>
          	<div className="social pad-bottom-lg">
          		<div className="fb-like"
          			data-href="https://www.facebook.com/facepopapp/"
          			data-layout="standard"
          			data-action="like"
          			data-show-faces="true">
          		</div>
          		<a href="https://www.facebook.com/facepopapp/" className="social-links" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/facepop/social/icon_facebook.png" width="75" className="social-link-icon" /></a>
          		<a href="https://twitter.com/FacepopApp" className="social-links" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/facepop/social/icon_twitter.png" className="social-link-icon" /></a>
          		<a href="https://www.instagram.com/facepopapp/" className="social-links" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/facepop/social/icon_instagram.png" className="social-link-icon" /></a>
          		<a href="https://www.pinterest.com/facepopcompany/" className="social-links" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/facepop/social/icon_pinterest.png" className="social-link-icon" /></a>
          		<a href="https://plus.google.com/u/0/112716641914283714321/posts" className="social-links" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/facepop/social/icon_google_plus.png" className="social-link-icon" /></a>
          	</div>
          	<div className="main-text">
          		INVESTMENT INQUIRIES ARE WELCOME
          	</div>
          	<div className="copy-text">
          		USPTO/Patent Pending/File Serial No. 15/355,038
          	</div>
          	<div className="footer-videos pad-bottom-lg">
              <div className="row">
                <div className="col-sm-4">
                  <div className="product-video-container footer-video">
              	      <div className="video-mask contact-video-mask ">
              	        <video poster="https://s3-us-west-2.amazonaws.com/facepop/poster51.png" id="video51" className="contact-video-footer">
              	          <source src="https://s3-us-west-2.amazonaws.com/facepop/video/video-51.mp4" type="video/mp4" />
              	          Your browser does not support HTML5 video.
              	        </video>
              	        <img id="51" className="play-button product-video-play-image" onClick={this.playPause.bind(this, '51')} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
              	      </div>
              	  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-video-container footer-video">
                    <div className="video-mask contact-video-mask ">
                      <video poster="https://s3-us-west-2.amazonaws.com/facepop/poster38.png" id="video38" className="contact-video-footer">
                        <source src="https://s3-us-west-2.amazonaws.com/facepop/video/video-38.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                      <img id="38" className="play-button product-video-play-image" onClick={this.playPause.bind(this, '38')} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
                    </div>
              	   </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-video-container footer-video">
                      <div className="video-mask contact-video-mask ">
                        <video poster="https://s3-us-west-2.amazonaws.com/facepop/poster75.png" id="video135" className="contact-video-footer">
                          <source src="https://s3-us-west-2.amazonaws.com/facepop/video/video-135.mp4" type="video/mp4" />
                          Your browser does not support HTML5 video.
                        </video>
                        <img id="135" className="play-button product-video-play-image" onClick={this.playPause.bind(this, '135')} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
                      </div>
                   </div>
                </div>
              </div>



          	</div>
          	<div className="copy-text">
          		&copy; 2016 The Facepop Company, All Rights Reserved
          	</div>





      		</div>
      	</div>
      </div>
    );
  }
}
