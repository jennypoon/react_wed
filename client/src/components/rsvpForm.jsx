import React, { Component } from 'react';
import axios from 'axios';

class RsvpForm extends Component {
 constructor(props) {
    super(props);

    this.state = {
      selectedOption: "1",
      name: "",
      email: "",
      plusone: "null",
      comments: "null",
      songs: "null",
      invalidEmail: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  validateEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
  }

  handleSubmit(event){
    event.preventDefault();

    if (this.validateEmail(this.state.email)) {
      axios.post("/api/rsvp", {
        name: this.state.name,
        email: this.state.email,
        plusone: this.state.plusone,
        rsvp: this.state.selectedOption,
        comments: this.state.comments,
        songs: this.state.songs
      })

      .then((res) => {
      })

      this.props.handleClick()

    } else {
        this.props.invalidEmail()
    }
  }

  render() {
    return (

      <div>
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
                {this.props.invalidState ? "Oops! Please enter a valid email address" : "" } <br/><br/>
                <label className="rsvpColumn">
                  First & Last Name:
                </label>
                <input className="rsvpColumn input" type="text" name="name" onChange={this.handleChange} required ></input><br/><br/>

                <label className="rsvpColumn">
                  Email:
                </label>
                <input className="rsvpColumn input" type="text" name="email" onChange={this.handleChange} required ></input><br/><br/>

                <label className="rsvpColumn">
                  Plus 1's Name(s):
                </label>
                <input className="rsvpColumn input" type="text" name="plusone" onChange={this.handleChange}></input><br/><br/>

                <label className="rsvpColumn">
                 Song Requests:
                </label>
                <input className="rsvpColumn input" type="text" name="songs" onChange={this.handleChange}></input><br/><br/>

                 <label className="rsvpColumn">
                 Comments:
                </label>
                <input className="rsvpColumn comment" type="text" name="comments" onChange={this.handleChange}></input><br/><br/>
                <button className="rsvpButton" onClick={this.handleClick}> Submit your RSVP! </button>
              </form>
              ) : (
              <div>
                Sorry to hear that you can't make it to our special day! <br/><br/>

                <form className="rsvpForm" onSubmit={this.handleSubmit}>
                    {this.props.invalidState ? "Oops! Please enter a valid email address" : "" } <br/><br/>
                <label className="rsvpColumn">
                  First & Last Name:
                </label>
                <input className="rsvpColumn input" type="text" name="name" onChange={this.handleChange} required ></input><br/><br/>

                <label className="rsvpColumn">
                  Email:
                </label>
                <input className="rsvpColumn input" type="text" name="email" onChange={this.handleChange} required ></input><br/><br/>

                <button className="rsvpButton" onClick={this.handleClick}> Submit your RSVP! </button>
                </form>
              </div>)}
          </div>
      )}
}

export default RsvpForm;