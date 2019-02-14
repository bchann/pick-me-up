import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BottomNav from '../BottomNav/BottomNav';
import './Routes.scss';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dest: this.props.match.params.dest
    };
  }

  render() {
    return (
      <div className="routes">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <h1 style={{ color: 'var(--primary)' }}>Pick Me Up</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={2} className="title-text">
              From:
            </Col>
            <Col xs={8} md={4} className="title-text">
              Current Location
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={2} className="title-text">
              To:
            </Col>
            <Col xs={8} md={4} className="title-text">
              {this.state.dest}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              Friends planned trips:
            </Col>
          </Row>
        </Container>
        <BottomNav activeTab="routes" />
      </div>
    );
  }
}

export default Routes;
