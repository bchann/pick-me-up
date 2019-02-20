import React, { Component } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = { dest: '' };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="home">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1 style={{ color: 'var(--primary)' }}>Pick Me Up</h1>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="material-icons">near_me</i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  className="form-control"
                  placeholder="Destination"
                  aria-label="Destination"
                  name="dest"
                  value={this.state.dest}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" href="#routes-tab" className="tab-click">
                    Go
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>

          {/* <Row className="justify-content-center">
            <Col xs={10} md={6} className="suggestions-title">
              Recent Searches:
            </Col>
          </Row>
          <Row className="justify-content-center suggestions-item">
            <Col xs={10} md={6}>
              <ListGroup id="suggestions">
                <ListGroup.Item action href="#routes-tab" className="justify-content-between d-flex tab-click">
                  Geisel
                  <i className="material-icons">book</i>
                </ListGroup.Item>
                <ListGroup.Item action href="#routes-tab" className="justify-content-between d-flex tab-click">
                  Costco
                  <i className="material-icons">store</i>
                </ListGroup.Item>
                <ListGroup.Item action href="#routes-tab" className="justify-content-between d-flex tab-click">
                  McDonald's
                  <i className="material-icons">fastfood</i>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default Home;
