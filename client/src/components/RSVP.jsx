import React, { Component } from 'react';
import "../styling/rsvp.css"
import RsvpForm from "../components/rsvpForm.jsx"

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
    console.log(this.state)

    return (
      <div className="rsvpComponent">
        {this.state.rsvp ? (
          <div>
            <h3>Your RSVP has been sent! Thank You!</h3>
            <p>If you need to make changes, just send another RSVP and we'll use the latest one</p>
            <p>If you have any questions, email us at: jenny.poon@live.ca or call us at 604-716-7891</p>
          </div>
          ) : (
          <div>
            <RsvpForm/>
            <button className="rsvpButton" onClick={this.handleClick}> Submit your RSVP! </button>
          </div>
        )}
      </div>
  )}
}

export default RSVP;