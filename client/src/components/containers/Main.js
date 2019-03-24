import React, { Component } from "react";
import Home from "../screens/Home";
import NavbarMenu from "../interface/NavbarMenu";
import { addEvent, loadEvents } from "../../redux/actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <NavbarMenu />
        <Home />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  user: state.user
});

const dispatchStateToProps = dispatch => ({
  addEventToList: event => dispatch(addEvent(event)),
  loadEventsList: events => dispatch(loadEvents(events))
});

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(Main);
