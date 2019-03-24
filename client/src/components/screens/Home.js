import React, { Component } from "react";
import logo from "../../assets/images/logo22.png";
import { Form, Col, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
                <Form.Group controlId="formGridState">
                  <Form.Label>Seleziona un quartiere</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                {/*<Form.Group controlId="inputSearch">
                  <Form.Control type="text" placeholder="Cerca Evento..." />
                </Form.Group>
                <Button id="btnSearch" variant="light" type="submit">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </Button>
                */}
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
