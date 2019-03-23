import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/containers/Main";
import { createStore } from "redux";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return <Main />;
  }
}

export default App;
