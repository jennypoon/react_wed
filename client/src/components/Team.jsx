import React, { Component } from 'react';
import grace from '../images/grace.jpg'
import honey from '../images/honey.jpg'
import abby from '../images/abby.jpg'
import leora from '../images/leora.jpg'
import wilson from '../images/wilson.jpg'
import brian from '../images/brian.jpg'
import kevin from '../images/kevin.jpg'
import chris from '../images/chris.jpg'

class Team extends Component {

 render() {
  return (
    <div>
      <h2>The Ladies</h2>
      <div className="teamContainer">

        <div className="imgContainer">
          <img src={abby} alt="MOH" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>A B B Y</p>
              <p>Maid of Honor</p>
              <p>All hail the Pinterest Queen!</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={leora} alt="Bridesmaid" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>L E O R A</p>
              <p>What happens in Saskatoon, stays in Saskatoon</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={honey} alt="Bridesmaid" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>H O N E Y</p>
              <p>Best investigator I know</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={grace} alt="Bridesmaid" className="indivImage"/>
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
          <img src={chris} alt="Best Man" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>C H R I S</p>
              <p>Best Man</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={kevin} alt="Groomsmen" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>K E V I N</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={wilson} alt="Groomsmen" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>W I L S O N</p>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src={brian} alt="Groomsmen" className="indivImage"/>
          <div className="teamHover">
            <div className="teamHoverText">
              <p>B R I A N</p>
            </div>
          </div>
        </div>

      </div>



    </div>

  )}
}




export default Team;
