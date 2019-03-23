import React, { Component } from "react";
import logo from "../../assets/images/logo22.png";
import { Form, Button, Col, Row } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div id="logo">
          <img src={logo} alt="logo" width={400} height={100} align="middle" />
        </div>

        <div id="formSearch">
          <Form>
            <Row className="justify-content-md-center">
              <Col sm={12} md={6} lg={6}>
                <Form.Group controlId="inputSearch">
                  <Form.Control type="text" placeholder="Cerca Evento..." />
                </Form.Group>
                <Button variant="light" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
