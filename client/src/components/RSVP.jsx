import React, { Component } from 'react';
import "../styling/rsvp.css"
import RsvpForm from "../components/rsvpForm.jsx"

class RSVP extends Component {
 constructor(props) {
    super(props);

    this.state = {
      selectedOption: "",
      rsvp: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

  }

  handleChange(event) {
    this.setState({ rsvp: true });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();

  }

  render() {
    console.log(this.state)

    return (
      <div className="rsvpForm">
        {this.state.rsvp ? ("You have already RSVP!"
          ) : (
          <div>
          <RsvpForm selectedOption={this.state.selectedOption}/>
          <button onClick={this.handleClick}> Submit your RSVP! </button>
          </div>
        )};
      </div>
  )}
}

export default RSVP;