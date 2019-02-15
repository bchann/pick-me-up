import React, { Component } from 'react';
import { Col, Container, Row, Button, Modal, Form, Card } from 'react-bootstrap';
import BottomNav from '../BottomNav/BottomNav';
import { auth } from '../../firebase.js';
import { firestore } from '../../firebase';
import './Routes.scss';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      dest: this.props.match.params.dest,
      trips: [],
      user: null,
      from: '',
      to: '',
      time: ''
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });

    firestore
      .collection('trips')
      .get()
      .then(snapshot => {
        var trips = [];
        snapshot.forEach(doc => {
          trips.push(doc.data());
        });
        this.setState({ trips: trips });
      })
      .catch(err => {
        console.log('Error getting trips', err);
      });
  }

  showForm() {
    this.setState({ show: true });
    console.log(this.state.trips);
  }

  closeForm() {
    this.setState({ show: false, from: '', to: '', time: '' });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    var trip = {
      from: this.state.from,
      to: this.state.to,
      time: this.state.time,
      user: this.state.user.displayName
    };

    firestore.collection('trips').add(trip);

    this.closeForm();
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
          {/* <Row className="justify-content-center">
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
          </Row> */}
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              Friend's planned trips:
            </Col>
          </Row>
          {this.state.trips.map((trip, index) => {
            return (
              <Row key={index} className="justify-content-center">
                <Col xs={10} md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{trip.user}</Card.Title>
                      <Card.Text>
                        Driving from {trip.from} to {trip.to} at {trip.time}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Container>

        <Button className="add-button" variant="primary" onClick={this.showForm}>
          <i className="material-icons">add</i>
        </Button>
        <Modal show={this.state.show} onHide={this.closeForm} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Trip</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter location"
                  name="from"
                  onChange={this.handleChange}
                  value={this.state.from}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter location"
                  name="to"
                  onChange={this.handleChange}
                  value={this.state.to}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter time"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.time}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeForm}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.submitForm}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
        <BottomNav activeTab="routes" />
      </div>
    );
  }
}

export default Routes;
