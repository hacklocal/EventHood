import React, { Component } from "react";
import logo from "../../assets/images/logo22.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="logo">
          <img src={logo} alt="logo" height={200} align="middle" />
        </div>
        <button className="primary-button">TROVA EVENTI</button>
      </div>
    );
  }
}
