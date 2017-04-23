import React, { Component } from 'react';

import Video from './common/Video.jsx';


export default class Contact extends Component {
  constructor(props) {
     super(props);
  }q

  render() {
    return (
      <div className="contact-section">
      	<div className="container">
      		<div className="row">


          	<div className="page-title">
            		CONTACT
          	</div>
          	<div className="pad-bottom-lg">
          		 <Video video="75" isRestricted={this.props.isRestricted} ></Video>
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
              <h1>
                GEOFFREY A. WEG<br />
                & ASSOCIATES P.C.
              </h1>
              <div className="pad-bottom-sm">
                3420 Ocean Park Blvd., Suite 3025<br />
                Santa Monica, CA 90405
              </div>
              <h3>
                Phone: (310) 746 6929
              </h3>
              <h3>
                Email: gweg@gweglaw.com
              </h3>
              <h3>
                Fax: (310) 310 3502
              </h3>
          	</div>
          	<div className="copy-text">
          		USPTO/Patent Pending/File Serial No. 15/355,038
          	</div>
          	<div className={ this.props.isRestricted ? 'hide' : 'footer-videos pad-bottom-lg' }>
              <div className="row">
                <div className="col-sm-4">
                  <Video video="51" isRestricted={this.props.isRestricted} ></Video>
                </div>
                <div className="col-sm-4">
                   <Video video="38" isRestricted={this.props.isRestricted} ></Video>
                </div>
                <div className="col-sm-4">
                   <Video video="135" isRestricted={this.props.isRestricted} ></Video>
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
