import React, { Component } from 'react';
import '../styling/team.css';
import avatar from '../images/avatar.png'

class Team extends Component {
 render() {
  return (
    <div className="teamComponent">

    <h2>The FamJam</h2>
      <div className="imgContainer">
        <img src={avatar} alt="Stephen's Family" className="indivImage"/>
        <div className="teamHover">
          <div className="teamHoverText">
            <p> Stephen's Family </p>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src={avatar} alt="Jenny's Family" className="indivImage"/>
        <div className="teamHover">
          <div className="teamHoverText">
            <p> Jenny's Family </p>
          </div>
        </div>
      </div>

      <h2>The Ladies</h2>
      <div className="teamContainer">

        <div className="imgContainer">
          <img src={avatar} alt="MOH" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>A B B Y</p>
              <p>Maid of Honor</p>
              <p>All hail the Pinterest Queen!</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} alt="Bridesmaid" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>L E O R A</p>
              <p>What happens in Saskatoon, stays in Saskatoon</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} alt="Bridesmaid" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>H O N E Y</p>
              <p>Best investigator I know</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} alt="Bridesmaid" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>G R A C E</p>
              <p>My Future Yoga Instructor</p>
            </div>
          </div>
        </div>

      </div>

      <h2>The Gents</h2>
      <div className="teamContainer">

        <div className="imgContainer">
          <img src={avatar} alt="Groomsmen" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>Groomsmen</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} alt="Groomsmen" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Groomsmen </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} alt="Groomsmen" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p> Groomsmen </p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={avatar} alt="Groomsmen" className="indivImage"/>
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
