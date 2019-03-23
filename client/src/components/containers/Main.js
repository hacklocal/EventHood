import React, { Component } from "react";
import Home from "../screens/Home";
import NavbarMenu from "../interface/NavbarMenu";

export default class Main extends Component {
  render() {
    return (
      <div>
        <NavbarMenu />
        <Home />
      </div>
    );
  }
}
