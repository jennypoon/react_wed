import React, { Component } from 'react';
import '../styling/team.css';
import avatar from '../images/avatar.png'

class Team extends Component {
 render() {
  return (
    <div className="teamContainer">

      <div className="imgContainer">
        <img src={avatar} className="indivImage"/>
        <div className="teamHover">
          <div className="teamHoverText">
            <p> 1 </p>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src={avatar} className="indivImage"/>
        <div className="teamHover">
          <div className="teamHoverText">
            <p> 2 </p>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src={avatar} className="indivImage"/>
        <div className="teamHover">
          <div className="teamHoverText">
            <p> 3 </p>
          </div>
        </div>
      </div>

    </div>
  )}
}




export default Team;
