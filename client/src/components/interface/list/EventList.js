import React, { Component } from "react";
import EventItem from "./EventItem";

export default class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div id="event-list">
        {events.map(el => (
          <EventItem key={el.id} event={el} />
        ))}
      </div>
    );
  }
}
