import React, { Component } from 'react';
import { Col, Container, Row, Card, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import './Routes.scss';
import BottomNav from '../BottomNav/BottomNav';

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
              Best Options:
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card bg="primary">
                <Card.Header>Bus</Card.Header>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    MTS 202 @ 2:15PM
                    <Badge pill variant="primary">
                      5
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    UCSD Shuttle @ 2:20PM
                    <Badge pill variant="primary">
                      7
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    MTS 105 @ 2:20PM
                    <Badge pill variant="primary">
                      10
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    MTS 202 @ 2:30PM
                    <Badge pill variant="primary">
                      17
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={6}>
              <Card bg="primary">
                <Card.Header>Carpool</Card.Header>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    Brian <br /> Costa to Geisel @ 2:15PM
                    <Badge pill variant="primary">
                      5
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    Sunny <br /> Axiom to CICC @ 2:30PM
                    <Badge pill variant="primary">
                      15
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
        <BottomNav activeTab="routes" />
      </div>
    );
  }
}

export default Routes;
