import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import { Form, Col, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  render() {
    const { regions } = this.props;
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
                    {regions.map(el => (
                      <option key={el}>{el}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button id="btnSearch" variant="light" type="submit">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  regions: state.regions
});

export default connect(mapStateToProps)(Home);
