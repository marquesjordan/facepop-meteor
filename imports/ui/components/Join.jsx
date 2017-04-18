import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Join extends Component {
  render() {
    return (
      <div className="join-form">

      		<div className="row pad-bottom-lg">
            <div className="col-md-6 col-md-offset-3">

              <div className="main-text pad-bottom-lg">
                SO YOU WANT TO BECOME ONE OF OUR EXCLUSIVE BETA TESTERS?
              </div>

              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" ref="email" placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group">
                  <label htmlFor="ageSelect">Age Group</label>
                  <select id="ageSelect" className="form-control">
                    <option>18 and under</option>
                    <option>12 to 25</option>
                    <option>26 to 34</option>
                    <option>35 and older</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
      		</div>

      </div>
    );
  }
}
