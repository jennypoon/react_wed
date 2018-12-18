import React, { Component } from 'react';

class RSVP extends Component {
 constructor(props) {
    super(props);

    this.state = {
      selectedOption: ""
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
    this.setState({ selectedOption: event.target.value }, console.log(this.state));
  }

  handleSubmit(event){
    event.preventDefault();

  }

  render() {

    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <label>
            Are you coming? <br/>
            Yes
              <input type="radio" name="Yes" value="1"
                checked={this.state.selectedOption === "1"}
                onChange={this.handleOptionChange}
              />
            No
              <input type="radio" name ="No" value="0"
                checked={this.state.selectedOption === "0"}
                onChange={this.handleOptionChange}
              />

          </label>
              <label>
                First and Last Name:
                <input className="register" type="text" name="name" onChange={this.handleChange}></input>
              </label>
              <label>
                Email:
                <input className="register" type="text" name="email" onChange={this.handleChange}></input>
              </label>
              <label>
                Number of Seats:
                <input className="register" type="text" name="email" onChange={this.handleChange}></input>
              </label>
              </form>
        </div>
      )};
}

export default RSVP;