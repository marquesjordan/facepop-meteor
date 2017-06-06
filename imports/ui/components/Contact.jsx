import React, { Component } from 'react';

import Video from './common/Video.jsx';


export default class Contact extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    const contact1Style = {top: '-76px', left: '-65px'};
    const contact2Style = {top: '-76px', left: '-70px'};
    const contact3Style = {top: '-76px', left: '-74px'};
    const contact4Style = {top: '-76px', left: '-65px'};

    return (
      <div className="contact-section">
      	<div className="container">
      		<div className="row">


          	<div className="page-title">
            		CONTACT
          	</div>
          	<div className="pad-bottom-lg">
          		 <Video video="75" isRestricted={this.props.isRestricted} vidStyle={contact1Style} />
            </div>

          	<div>
          		<div className="main-text pad-bottom-sm">
          			THE POWER OF FAST MESSAGING AND SHORT VIDEO WILL TRULY BE IN YOUR HANDS!
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
          	<div className={ this.props.isRestricted ? 'hide' : 'footer-videos pad-bottom-lg' }>
              <div className="row">
                <div className="col-sm-4">
                  <Video video="405" isRestricted={this.props.isRestricted} vidStyle={contact2Style} />
                </div>
                <div className="col-sm-4">
                   <Video video="406" isRestricted={this.props.isRestricted} vidStyle={contact3Style} />
                </div>
                <div className="col-sm-4">
                   <Video video="407" isRestricted={this.props.isRestricted} vidStyle={contact4Style} />
                </div>
              </div>



          	</div>


      		</div>
      	</div>
      </div>
    );
  }
}
