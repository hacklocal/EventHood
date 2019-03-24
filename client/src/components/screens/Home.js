import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setSelectedRegion } from "../../redux/actions";

class Home extends Component {
  state = {
    region: ""
  };

  handleChange = e => {
    this.setState({
      region: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setRegion(this.state.region);
    this.props.history.push("/eventi");
  };
  render() {
    const { regions, setRegion } = this.props;
    return (
      <div className="container">
        <div id="formSearch">
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Row className="justify-content-md-center">
              <Col sm={12} md={6} lg={6}>
                <Form.Group controlId="formGridState">
                  <Form.Label className="text-white">
                    Seleziona un quartiere
                  </Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.handleChange}
                    value={this.state.region}>
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

const mapDispatchToProps = dispatch => ({
  setRegion: region => dispatch(setSelectedRegion(region))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
