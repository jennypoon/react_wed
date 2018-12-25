import React, { Component } from 'react';
import "../styling/venue.css";

class Venue extends Component {

  //   <div className="venueLeft">
    //     <p> Details about Venue </p>
    //   </div>
    //   <div className="venueRight">
 render() {

  const mapouterStyle = {
        position: 'center',
        textAlign: 'right',
        height: '400px',
        width: '100%'
  };

  const gmapStyle = {
        overflow: 'hidden',
        background: 'none!important',
        height: '100%',
        width: '100%'
  }

  return (
    <div className="venueComponent">
      <div class="mapouter" style={mapouterStyle} >
        <div class="gmap_canvas" style={gmapStyle} >
          <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=south%20bonson%20community%20center&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>
    </div>
  )}
}

export default Venue;


