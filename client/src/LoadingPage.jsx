import React, { Component } from 'react';
import Countdown from "./components/Countdown.jsx";
import logo from "./images/vista_logo.png";
import "./styling/loadingpage.css";



class LoadingPage extends Component {

  render() {
    return (
      <div>
      <img className="logoLoading" src={logo} alt="JS logo" />
      <Countdown />
      </div>
    )
  }

}

export default LoadingPage;