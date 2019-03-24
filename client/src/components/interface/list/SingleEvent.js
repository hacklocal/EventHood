import React, { Component } from "react";
import { connect } from "react-redux";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class SingleEvent extends Component {
  event = this.props.events.find(ev => ev.id === this.props.match.params.id);

  render() {
    const { event } = this;
    return (
      <Jumbotron id="eventDetails" fluid>
        <Container>
          <h1>{event.titolo}</h1>
          <p>Creato da: {event.creatore}</p>
          <div className="my-5" />
          <p>Descrizione: {event.descrizione}</p>
          <p>
            Luogo: {event.indirizzo}, {event.paese}, {event.CAP}
          </p>
          <p>
            Data/Ora inizio: {event.data_inizio} - {event.ora_inizio}
          </p>
          <p>
            Data/Ora fine: {event.data_fine} - {event.ora_fine}
          </p>

          <Button id="btnJoin" variant="light">
            <Link to={this.props.user && this.props.user.id ? "#" : "/login"}>
              Partecipa
            </Link>
          </Button>
        </Container>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  user: state.user
});

export default connect(mapStateToProps)(SingleEvent);
