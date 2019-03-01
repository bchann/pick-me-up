import React, { Component } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { firestore } from '../../firebase';
import './UserTrips.scss';

const UserTripCard = props => (
  <Row className="justify-content-center">
    <Col xs={10} md={6}>
      <Card border="primary">
        <Card.Body>
          <Card.Text>
            <i onClick={() => props.removeTrip(props.trip.id)} className="material-icons trip-card-action">
              remove_circle_outline
            </i>
            {props.trip.from} to {props.trip.to} at {props.trip.time}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

class UserTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      dest: '',
      trips: this.props.trips,
      displayedTrips: [],
      from: '',
      to: '',
      time: ''
    };

    this.getUserTrips();
  }

  componentDidUpdate() {
    if (this.state.currentUser !== this.props.currentUser) {
      this.setState({ currentUser: this.props.currentUser });
      this.getUserTrips();
    }

    if (this.state.trips !== this.props.trips) {
      this.setState({ trips: this.props.trips });
      this.getUserTrips();
    }
  }

  getUserTrips() {
    var user = this.state.currentUser;

    if (user && this.props.trips && this.props.trips.length) {
      var displayedTrips = [];
      this.props.trips.forEach(trip => {
        if (trip.createdBy === user.uid) {
          displayedTrips.push(trip);
        }
      });
      this.setState({ displayedTrips });
    }
  }

  showForm = () => {
    this.setState({ show: true });
  };

  closeForm = () => {
    this.setState({ show: false, from: '', to: '', time: '' });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTrip = e => {
    e.preventDefault();

    var trip = {
      from: this.state.from.trim(),
      to: this.state.to.trim(),
      time: this.state.time.trim(),
      displayName: this.state.currentUser.displayName,
      createdBy: this.state.currentUser.uid
    };

    firestore.collection('trips').add(trip);

    this.closeForm();
  };

  removeTrip(tripID) {
    firestore
      .collection('trips')
      .doc(tripID)
      .delete();
  }

  render() {
    return (
      <div className="user-trips">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <h1 style={{ color: 'var(--primary)' }}>Pick Me Up</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              Your planned trips:
            </Col>
          </Row>
          {this.state.displayedTrips.map(trip => {
            return <UserTripCard key={trip.id} removeTrip={this.removeTrip} trip={trip} />;
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
            <Button variant="outline-secondary" onClick={this.closeForm}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={this.addTrip}
              disabled={this.state.from === '' || this.state.to === '' || this.state.time === ''}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UserTrips;
