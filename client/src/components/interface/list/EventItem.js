import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class EventItem extends Component {
  render() {
    const { event } = this.props;
    return (
      <Col sm={12} md={4} lg={4}>
        <Card id="cardEvent">
          <Card.Body>
            <Card.Title>{event.titolo}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {event.creatore}
            </Card.Subtitle>
            <Card.Text>{event.descrizione}</Card.Text>
            <Link to={`/evento/${event.id}`}>Dettagli evento</Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
