import React, { Component } from 'react';
import {ReadMore} from 'react-read-more';

import Video from './common/Video.jsx';

// Task component - represents a single todo item
export default class Team extends Component {
  constructor(props) {
     super(props);
  }

  render() {
    return (
      <div className="team-section">
      	<div className="container">
      		<div className="row">
            <div className="page-title">
            		TEAM
          	</div>

            <Video video="29" isRestricted={this.props.isRestricted} ></Video>

            <div className="row pad-bottom-lg">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img src="https://s3-us-west-2.amazonaws.com/facepop/fp_logo_final.png" width="180" className="media-object img-rounded" />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Bervick J. Deculus II</h4>
                    <h4 className="media-heading">CEO</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      Founder of The Facepop Company (dba) and wildly motivated in offering a new communication tool that
                      elevates today’s messaging experience around the globe. Bervick is an independent businessman for
                      over 15 years with upwards of 20,000 hours in project management for independent entertainment
                      companies and small businesses. Throughout his trails, Bervick continues to build and tailor quality
                      assurance plans, refine creative development processes, conceptualize and develop viable
                      products, services and events, and an all around natural creator and team player. While staying ahead
                      of pop culture trends, Bervick truly manages to <em>"tastemake"</em> with an unmatched level of meticulosity.
                      Bervick is a graduate of Howard University with a BA in Communications.
                    </ReadMore>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object img-rounded" src="https://s3-us-west-2.amazonaws.com/facepop/fp_logo_final.png" width="180" alt="..." />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Kareem Grimes</h4>
                    <h4 className="media-heading">Co-Founder</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      Kareem upholds the creative direction and partnership development for the
                			The Facepop Company. Kareem, a 20 year seasoned actor, services major companies
                			like, Samsung, AT&T and Mountain Dew as an event consultant and brand
                			ambassador. Whether for sales, brand recognition, creative vetting and/or
                			personal empowerment, Kareem's innate ability to create an impactful
                			experience is proven to be unmatched. Due to his keen awareness of pop
                			culture and its forthcoming trends, Kareem's ability to garner key relationships,
                			locate product and talent with great potential is quite superior. Certainly,
                			delivering creative needs for product development, marketing and building
                			strategic partnerships to accelerate Facepop's growth can only come with
                			ease. Kareem Grimes is a graduate of Cal State Los Angeles with a BA in
                			Broadcast Journalism and Radio TV & Film.
                    </ReadMore>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object img-rounded" src="https://s3-us-west-2.amazonaws.com/facepop/maginfo.png" width="180" alt="..." />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">UX/UI Engineers</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      From custom integrations and mobile applications, to
                      enterprise search and big data analytics, we bring a world-class
                      experience to clients of all sizes, across dissimilar
                      industries and all with unique needs.  With years of
                      experience providing innovative custom data and development
                      solutions, we only offer the highest quality custom solutions
                      with the most modern product architectures, practices and
                      technologies.
                    </ReadMore>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object img-rounded" src="https://s3-us-west-2.amazonaws.com/facepop/hs-new-logo.png" width="180" alt="..." />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Harrison Schaen</h4>
                    <h4 className="media-heading">CTO Advisor & Business Strategist</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      Harrison is a graduate of Princeton University with a concentration in Computer Science and English.
                			Harrison has more than 5 years of web and application development experience. Currently,
                			Harrison is at the helm of Issue Fixers, Inc. (web/app development services), Sr. Web Developer at Bask
                			Digital Media and founder of OK Feed Me (mobile application; beta). Along with his virtuosities within
                      the booming tech space, Harrison continues to exercise his multimedia marketing abilities, and business
                      strategies for both small and large businesses that drive company growth and success.
                    </ReadMore>
                  </div>
                </div>
              </div>
            </div>

          </div>
      	</div>
      </div>
    );
  }
}
