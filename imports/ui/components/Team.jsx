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
                    <h4 className="media-heading">FOUNDER &amp; CEO</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      Founder of The Facepop Company, LLC. and wildly motivated in offering a new communication
                      tool that elevates today’s messaging experience around the globe. Bervick is an independent
                      businessman for over 15 years with upwards of 20,000 hours in project management for
                      independent entertainment companies and small businesses. Throughout his trails, Bervick
                      continues to build and tailor quality assurance plans, refine creative development processes,
                      conceptualize and develop viable entertainment related products, services and events, and
                      ultimately a team player and a natural creator. Bervick’s visionary gifts maintain his creations to
                      remain ahead of pop culture trends, and truly manage to taste make with an unmatched level of
                      meticulosity. Bervick is a graduate of Howard University with a BA in Communications.
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
                    <h4 className="media-heading">Jerome Henry</h4>
                    <h4 className="media-heading">CO-FOUNDER &amp; COO</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      With 15 + combined years of consultative sales. management, technical resolution, and digital
                      advertising expertise, Jerome Henry, affectionately known as “Jerry2.0” to those in contact with
                      him poses extraordinary decision-making, leadership and people skills. His experiences have
                      shaped him into a persuasive negotiator with a solid grasp of business operations - a truly
                      resourceful leader, with a high-energy entrepreneurial spirit for solving complex issues and
                      passion for hard work.  Simply put, Jerry ’brings it’ daily! His passion for management and
                      leadership carried over from the playing field to aspirations of running his own business. Within a
                      few years of successfully launching his first management/consulting firm, Jerry sharpened his
                      product development and negotiation skills by solidifying recording, publishing and licensing deals
                      with the likes of Dreamworks, Noontime Inc., EMI Music Publishing, Lionsgate, Disney (ABC,
                      Hollywood Records) and many more. He even spent a few years developing music production
                      software with industry giants, Big Fish Audio. A shining example of constructing teams and
                      monetizing thought processes.<br />
                      After seeing projections for multi-billion dollar growth in the marketing/advertising space, Jerry
                      quickly adopted a new career path serving a 5yr. tour of  duty at Yahoo! in the sales org before
                      venturing into the ad-tech start-up world over the last 4 yrs. In this transformational phase, Jerry
                      has designed performance marketing and social media monitoring strategies (inception to
                      flight) for some of the biggest internet retail brands (Speedo, Oakley, Ray Ban, Mrs Fields, Coffee
                      Bean, Harpers Bazaar, Tory Birch, DropCam, Car Fax, Papa John’s, SkyZone, Greystar,
                      FindLaw, Freeway Insurance &amp; many more) to deliver on every value propositions while hitting
                      each client’s target objectives &amp; driving incremental value to their marketing mix - taking these
                      brands from POCs &amp; test budget IOs to mature marketing spend. <br />
                      As Facepop Co-Founder and operational strategist, Jerry lends his analytic, creative, and
                      operational talents as one of the visionaries overseeing and cultivating the company’s brand
                      development, strategic alliances, partnerships, and overall market positioning. Now, with the
                      business savvy of a seasoned entrepreneur, Mr. Henry has set his sights on making The
                      Facepop Company a globally recognized symbol of excellence and achievement in the ever-
                      expanding world of mobile messaging and digital media.
                    </ReadMore>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img src="https://s3-us-west-2.amazonaws.com/facepop/fp_logo_final.png" width="180" className="media-object img-rounded" />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Kareem Grimes</h4>
                    <h4 className="media-heading">CO-FOUNDER &amp; DIRECTOR OF BUSINESS AND CREATIVE DEVELOPMENT</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      Kareem upholds the creative direction and partnership development for the The Facepop
                      Company, LLC.  Kareem, a 20 year seasoned actor, services major companies like, Samsung,
                      AT&amp;T and Mountain Dew, as an event consultant and brand ambassador. Whether for sales,
                      brand recognition, creative vetting and/or personal empowerment, Kareem&#39;s innate ability to
                      create an impactful experience is proven to be unmatched. Due to his keen awareness of pop
                      culture and its forthcoming trends, Kareem&#39;s ability to garner key relationships, locate product and
                      talent with great potential is quite superior. Certainly, delivering creative needs for product
                      development, marketing and building strategic partnerships to accelerate Facepop&#39;s growth can
                      only come with ease. Kareem Grimes is a graduate of Cal State Los Angeles with a BA in
                      Broadcast Journalism and Radio TV &amp; Film.
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
                    <h4 className="media-heading">Jerrold Thompson</h4>
                    <h4 className="media-heading">SENIOR BRAND CONSULTANT AND BUSINESS DEVELOPMENT</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      Jerrold Thompson comes to The Facepop Company, LLC as an accomplished, seasoned
                      branding professional. Jerrold’s comprehensive background in business development, brand
                      management and marketing is expressed by his innate ability to compartmentalize and “see
                      beyond the moment”. His insight to merge the media-industry with technology trends into one
                      brand marketing landscape has continued to deliver the entertainment industry giants profitable
                      results. Programs designed for The Walt Disney Company, BET, Universal Music Group, Def
                      Jam Recordings, MTV, Sony BMG Music Entertainment and hosts of others have utilized
                      Jerrold’s dynamic vision of converging digital and traditional media marketing.
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
                    <h4 className="media-heading">BUSINESS STRATEGIST &amp; CTO ADVISOR</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      Harrison is a graduate of Princeton University with a concentration in Computer Science and
                      English. Harrison has more than 5 years of web and application development experience.
                      Currently, Harrison is at the helm of Issue Fixers, Inc. (web/app development services), Sr. Web
                      Developer at Bask Digital Media and founder of OK Feed Me (mobile application; beta). Along
                      with his virtuosities within the booming tech space, Harrison continues to exercise his multimedia
                      marketing abilities, and business strategies for both small and large businesses that drive
                      company growth and success.
                    </ReadMore>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img src="https://s3-us-west-2.amazonaws.com/facepop/fp_logo_final.png" width="180" className="media-object img-rounded" />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Tim Peysar</h4>
                    <h4 className="media-heading">SENIOR QA DIRECTOR</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      Tim Peysar has over 20 years of experience in the internet industry. Having started out humbly in
                      1996 as a tech support rep for a large ISP he quickly empathized with people having difficulty
                      using web applications that were less than user friendly. After running a tech support team for a
                      genealogy company in 2000, he branched off to become more proactive earlier in the software
                      cycle where he has advocated for better quality products with nearly 20 years of software testing.
                      Tim has extensive experience in creating and running Quality Assurance Organizations, both
                      locally and abroad. Starting out as a manual tester at a handful of startups in the early 2000’s,
                      Tim landed at Citysearch (part of the IAC family) where he lead and eventually managed a team
                      of testers in the local search field. From there, he went to create and manage a team of testers at
                      Los Angeles Times Interactive which lead him to taking the helm as the Director of Quality
                      Assurance for all of the Tribune Publishing television and newspaper properties. It was here that
                      he started focusing on building out automation frameworks and performance testing.<br />

                      After endeavoring for the Tribune&#39;s properties, Tim ventured to AT&amp;T interactive YP.com where
                      he lead as Executive Director of QA, managing web, mobile, search and data divisions.  At YP,
                      Tim pivoted towards using crowd-sourced audiences to help with user acceptance and location
                      based search relevancy.<br />

                      After spending the majority of his career at internet companies in Los Angeles, he left to run a
                      multi-national testing organization for a fintech company based in London with 17 test teams geo-
                      located across the UK, Germany, France, Bulgaria, Slovenia and Serbia. Upon returning to the
                      States, Tim worked for Connectivity, a startup located in Burbank, CA that was building a next-
                      gen marketing platform where he managed QA, Account Management and Customer Support. <br />
                      Tim is currently Director of QA at The Honest Company, while lending his breadth of knowledge
                      and experience to an all-star team at The Facepop Company, LLC., a mobile messaging tech
                      company aimed at changing the face of messaging around he globe!
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
                    <h4 className="media-heading">John Brown</h4>
                    <h4 className="media-heading">CFO ADVISOR</h4>
                    <ReadMore lines={4} onShowMore={this.props.onChange} text="more">
                      John Brown, the founding and managing director of ABACO, is passionate and dedicated to the
                      educational and professional development of entrepreneurs and community based organizations.
                      He is recognized as a passionate mentor and teacher who enjoys giving his time to enhance the
                      careers of many young urban professionals, executives and leaders.<br />

                      John E. Brown has over 45 years of working experience in real estate, finance, and accounting.
                      He began his professional career at Haskins &amp; Sells, where he became a Certified Public
                      Accountant. In 1994, Brown joined The Bedford Group. In 2010, Brown created ABACO Partners,
                      LLC, an advisory service firm organized to assist others in accessing capital. Brown is currently a
                      shareholder, partner, director, and/or advisor to a number of profit oriented businesses,
                      community and faith-based organizations.<br />

                      During his career Mr. Brown has developed apartments, condos, townhomes and single family
                      homes including affordable, senior and market rate housing across the country. Throughout his
                      professional career, Mr. Brown has also advised or assisted in the placement of equity and debt
                      to a number of business enterprises, including but not limited to Founders National Bank, Bob
                      Lott Productions, Honey’s Kettle, Gorilla Life, MATAH, Grenada Nutmeg Oil, The Tulsa Project,
                      and Africa Trade Link and Expo.<br />

                      From 2009 to present he has served as a director at Joseph Business School Los Angeles, a
                      program for Christian entrepreneurs. Brown currently serves on the Social Entrepreneurship and
                      Change Advisory Board for the Graduate School of Education and Psychology at Pepperdine
                      University. Brown is also an active member of the Board of The Real Estate Associate Program
                      (REAP), Los Angeles Chapter. Most recently, he joined the Board of Directors of Christian
                      Foundation of the West, a Christian Community Foundation.<br />

                      Mr. Brown is a graduate of California State University at Dominguez Hills (CSUDH). As a result of
                      his professional and academic contributions, he has been the recipient of: CSUDH Student
                      Achievement Award, The CSUDH Outstanding Alumni Award and an American Institute of
                      Certified Public Accountants Achievement Award.
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
