import React, { Component } from "react";
import { connect } from "react-redux";

class SingleEvent extends Component {
  event = this.props.events.find(ev => ev.id === this.props.match.params.id);

  render() {
    console.log(this.event);
    return <div>ciao</div>;
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(SingleEvent);
