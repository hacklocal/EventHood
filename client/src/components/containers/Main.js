import React, { Component } from "react";
import Home from "../screens/Home";
import NavbarMenu from "../interface/NavbarMenu";
import { addEvent, loadEvents, loadRegions } from "../../redux/actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Events from "../screens/Events";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";

class Main extends Component {
  state = {
    currentRegion: ""
  };
  fetchAreas = () => {
    const { loadRegionsList } = this.props;
    axios({
      url: "https://eventhood.worldtecno.com/?db=territori",
      adapter: jsonpAdapter,
      callbackParamName: "axiosJsonpCallback"
    })
      .then(res => res.data.features.map(el => el.properties.AMBITO))
      .then(res => loadRegionsList(res));
  };
  componentDidMount() {
    this.fetchAreas();
  }
  render() {
    return (
      <Router>
        <NavbarMenu />
        <Route path="/" exact component={Home} />
        <Route path="/eventi/" component={Events} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  user: state.user
});

const dispatchStateToProps = dispatch => ({
  addEventToList: event => dispatch(addEvent(event)),
  loadEventsList: events => dispatch(loadEvents(events)),
  loadRegionsList: query => dispatch(loadRegions(query))
});

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(Main);
