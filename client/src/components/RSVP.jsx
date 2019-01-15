import React, { Component } from 'react';
import RsvpForm from "../components/rsvpForm.jsx";

class RSVP extends Component {
 constructor(props) {
    super(props);

    this.state = {
      rsvp: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ rsvp: true });
  }


  render() {

    return (
      <div className="rsvpComponent">
        {this.state.rsvp ? (
          <div>
            <h3>Your RSVP has been sent! Thank You!</h3>
            <p>Need to make a Change? Just submit another RSVP and we'll use the latest one</p>
            <p>Got Questions? Email us at: jenny.poon@live.ca or call us at 604-716-7891</p>
          </div>
          ) : (
          <div>
            <h3> Please RSVP by May 1, 2019</h3>
            <RsvpForm handleClick= {this.handleClick} />
          </div>
        )}
      </div>
  )}
}

export default RSVP;