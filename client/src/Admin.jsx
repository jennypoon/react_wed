import React, { Component } from 'react';
import axios from 'axios';
import './styling/admin.css'


class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }

    this.getList = this.getList.bind(this)
    this.displayList = this.displayList.bind(this)
  }

  getList() {
    axios.get("/api/admin")
      .then((res) => {
        this.setState({ list: res.data})
      })
  }

  displayList(list) {
    console.log("inside displayList function", list)
    return (list.map((guest) => {
      return(
        <tr key={ guest.id }>
          <td>{ guest.id }</td>
          <td>{ guest.name }</td>
          <td>{ guest.email }</td>
          <td>{ guest.plus_one }</td>
          <td>{ guest.song_requests }</td>
          <td>{ guest.comments }</td>
        </tr>
        )
    })
  )}

  componentDidMount() {
    this.getList();
  }

  render() {
    const { list } = this.state;

    return (
      <div className="admin">
        <h1>RSVP List</h1>
        <table>
          <tbody>
           <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Plus Ones</th>
            <th>Song Requests</th>
            <th>Comments</th>
          </tr>
          { this.displayList(list) }
          </tbody>
        </table>
      </div>
    );
  }
}






export default Admin;