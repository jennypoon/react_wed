import React, { Component } from 'react';
import '../styling/team.css';
import avatar from '../images/avatar.png'

class Team extends Component {
 render() {
  return (
    <div className="teamWrapper">
      <div className="imgWrapper">
        <img src={avatar} className="indivImage"/>
      </div>

      <div className="imgWrapper">
        <img src={avatar} className="indivImage"/>
      </div>

      <div className="imgWrapper">
        <img src={avatar} className="indivImage"/>
      </div>

      <div className="imgWrapper">
        <img src={avatar} className="indivImage"/>
      </div>

      <div className="imgWrapper">
        <img src={avatar} className="indivImage"/>
      </div>

      <div className="imgWrapper">
        <img src={avatar} className="indivImage"/>
      </div>
    </div>
  )}
}

export default Team;

