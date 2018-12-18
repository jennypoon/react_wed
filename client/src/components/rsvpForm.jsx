import React, { Component } from 'react';
import "../styling/rsvp.css"

class RsvpForm extends Component {
 constructor(props) {
    super(props);

    this.state = {
      selectedOption: "1",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

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

    return (
      <div className="rsvpForm">
          <label className="left">
            Can you make it?
          </label>

          <label className="right">
            <input type="radio" name="Yes" value="1"
              checked={this.state.selectedOption === "1"}
              onChange={this.handleOptionChange}
            />
            Yes! Count me in!
          </label>

          <label className="right">
            <input type="radio" name ="No" value="0"
              checked={this.state.selectedOption === "0"}
              onChange={this.handleOptionChange}
            />
            Sorry, can't make it
          </label>

          <br/><br/>
            {this.state.selectedOption === "1" ? (
              <form className="rsvpForm" onSubmit={this.handleSubmit}>
                <label className="rsvpColumn">
                  First & Last Name:
                </label>
                <input className="rsvpColumn" type="text" name="name" onChange={this.handleChange}></input><br/>

                <label className="rsvpColumn">
                  Email:
                </label>
                <input className="rsvpColumn" type="text" name="email" onChange={this.handleChange}></input><br/>

                <label className="rsvpColumn">
                  Plus 1's Name(s):
                </label>
                <input className="rsvpColumn" type="text" name="plusName" onChange={this.handleChange}></input><br/>

                <label className="rsvpColumn">
                 Song Requests:
                </label>
                <input className="rsvpColumn" type="text" name="songs" onChange={this.handleChange}></input><br/>

                 <label className="rsvpColumn">
                 Comments:
                </label>
                <input className="rsvpColumn comment" type="text" name="comments" onChange={this.handleChange}></input><br/>
                </form> )
            : "Sorry to hear that you can't make it to our special day!" }
          </div>
      )}
}

export default RsvpForm;