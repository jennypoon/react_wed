import React, { Component } from 'react';
import axios from 'axios';


class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }

    this.getList = this.getList.bind(this)
  }

  getList() {
    axios.get("/api/admin")
      .then((res) => {
        console.log(typeof res.data, res.data)
        this.setState({ list: res.data })
      })
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    const { list } = this.state;

    return (
      <div className="admin">
        <h1>RSVP List</h1>
      </div>
    );
  }
}

export default Admin;