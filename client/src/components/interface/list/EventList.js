import React, { Component } from "react";
import EventItem from "./EventItem";

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    if (events.length) {
      return (
        <div id="eventList">
          {events.map(el => (
            <EventItem key={el.id} event={el} />
          ))}
        </div>
      );
    }
    return (
      <div id="eventList">
        <p>NESSUN EVENTO IN VISTA ALL'ORIZZONTE. TORNA INDIETRO!</p>
      </div>
    );
  }
}
