import React, { Component } from 'react';
import '../styling/team.css';
import avatar from '../images/avatar.png'

class Team extends Component {
 render() {
  return (
    <div className="teamComponent">

    <h2>Family</h2>
      <div className="imgContainer">
        <img src={avatar} className="indivImage"/>
        <div className="teamHover">
          <div className="teamHoverText">
            <p> Stephen's Family </p>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src={avatar} className="indivImage"/>
        <div className="teamHover">
          <div className="teamHoverText">
            <p> Jenny's Family </p>
          </div>
        </div>
      </div>

      <h2>The Ladies</h2>
      <div className="teamContainer">

        <div className="imgContainer">
          <img src={avatar} className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Maid Of Honor </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Bridesmaid </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Bridesmaid </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Bridesmaid </p>
            </div>
          </div>
        </div>

      </div>

      <h2>The Gents</h2>
      <div className="teamContainer">

        <div className="imgContainer">
          <img src={avatar} className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Groomsmen </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Groomsmen </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Groomsmen </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Groomsmen </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )}
}




export default Team;
