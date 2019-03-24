import React, { Component } from "react";
import EventList from "../interface/list/EventList";
import { connect } from "react-redux";

class Events extends Component {
  render() {
    const { region, events } = this.props;
    return <EventList events={events.filter(el => el.paese === region)} />;
  }
}

const mapStateToProps = state => ({
  region: state.actualRegion,
  events: state.events
});

export default connect(mapStateToProps)(Events);
