import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';

import { Vips } from '../../api/vip.js';
import { Investors } from '../../api/investors.js';

class AccessModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      granted: false,
      errorMessage: '',
      ip: '',
      isInvestor: false
    };

    this.checkInvestor = this.checkInvestor.bind(this);
  }

  componentDidMount() {
    this.UserIP();
  }

  UserIP() {
    $.getJSON('http://ipinfo.io').then(data => {
      this.setState({ ip: data.ip });
    });
  }

  checkInvestor(email) {
    var emailItem = this.props.investors.filter(item => {
      return item.email === email;
    });
    if (emailItem.length > 0) {
      return true;
    }

    return false;
  }

  handleSubmit(event) {
    const ALL_ACCESS_CODE = '100billion';
    event.preventDefault();
    const allAcessCode = ReactDOM.findDOMNode(
      this.refs.allAcessCode
    ).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    const checkbox = ReactDOM.findDOMNode(this.refs.checkbox).checked;

    if (!checkbox) {
      this.setState({
        errorMessage: 'Must click checkbox and agree to terms.'
      });
    } else if (allAcessCode === ALL_ACCESS_CODE && this.checkInvestor(email)) {
      const ip = this.state.ip;

      Vips.insert({
        email,
        ip,
        createdAt: new Date() // current time
      });

      this.setState({ granted: true, errorMessage: '' });

      this.props.handleModalSubmit(false);
    } else {
      this.setState({ errorMessage: 'Wrong Password' });
    }
  }

  renderFooter() {
    if (this.state.granted) {
      return (
        <div className="text-center">
          <h1>ACCESS GRANTED</h1>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <form className="beta-form" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input checkbox-vip"
                    id="checkbox"
                    ref="checkbox"
                  />
                  By selecting the checkbox, you are agreeing to the terms
                  provided herein.
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  ref="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  ref="allAcessCode"
                  id="password"
                  placeholder="Password"
                />
                <div className="error-message">
                  {this.state.errorMessage}
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const modalClassName = classNames(this.props.className, {
      modal: true,
      'show-modal': this.props.showModal
    });

    return (
      <div className={modalClassName}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" onClick={this.props.onCancel}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">
                {this.props.title}
              </h4>
            </div>
            <div className="modal-body">
              <div className="modal-body-container">
                <p>DISCLAIMER NOTICE</p>
                <p>
                  <br />
                </p>
                <p>USPTO PATENT PENDING FILE SERIAL No. 15/355,038</p>
                <p>THE FACEPOP COMPANY, LLC.&nbsp;</p>
                <p>
                  The information contained across this section of the website
                  is confidential and proprietary to
                </p>
                <p>
                  Bervick J. Deculus II, and The Facepop Company, Inc. including
                  potential employees, principals, family members, associates,
                  subsidiaries, successors, and or assigns (collectively
                  referred to as “App Company”) and is intended only for the
                  persons to whom it is transmitted by the App Company or its
                  representatives. Any reproduction of this document, in whole
                  or in part, or the divulgence of any of its contents without
                  the prior written consent of App Company, is prohibited.
                </p>
                <p>
                  The App Company filed a patent pending status and it does not
                  imply and shall not be construed as an offering of securities.
                  Prospective investors are not to construe the contents of this
                  document as investment, legal or tax advice from either App
                  Company or those that prepared this document. Any prospective
                  investor should consult with professional investment advisors
                  and gain professional legal and tax advice.
                </p>
                <p>
                  Each potential investor, consultant, independent contractor
                  and/or employee specifically understands and agrees that any
                  estimates, projections, revenue models, forecasts or
                  assumptions are by definition uncertain and thus possibly
                  unreliable. Any party considering a transaction with App
                  Company agrees to look solely to its own diligence.
                </p>

                <p>
                  Confidentiality Agreement: The recipient of this document
                  acknowledges that the information provided by
                </p>
                <p>
                  App Company in this website is confidential. Therefore, the
                  recipient of this document agrees not to disclose any of such
                  information without the express written permission of App
                  Company. Additionally; as said information is to be treated as
                  confidential; any non-disclosure, confidentiality agreement,
                  non-circumvention and/or other similar agreement by and
                  between App Company and the recipient of this business plan
                  shall be binding upon the parties with respect to the
                  information contained in this website.
                </p>

                <p>
                  In receipt of the App Company's "All Access" invite, it is
                  hereby acknowledge by the invitee that the information
                  furnished in this website is in all respects confidential in
                  nature (other than such information which is already in the
                  public domain through other means) and that any disclosure or
                  use of same by the undersigned may cause serious harm or
                  damage to App Company.
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>
            <div className="modal-footer">
              {this.renderFooter()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('investors');

  return {
    investors: Investors.find({}).fetch()
  };
}, AccessModal);
