import React, { Component } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, ListGroup, Card, Image } from 'react-bootstrap';
import { auth, firestore } from '../../firebase';
import './Home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = { currentUser: null, dest: '', searched: false, trips: [] };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user });

        firestore.collection('trips').onSnapshot(
          docSnapshot => {
            var trips = [];
            docSnapshot.forEach(tripDoc => {
              firestore
                .collection('users')
                .doc(tripDoc.data().createdBy)
                .get()
                .then(userDoc => {
                  if (userDoc.exists) {
                    var trip = tripDoc.data();
                    trip.id = tripDoc.id;
                    trip.userIMG = userDoc.data().photoURL;
                    trip.messengerURL = userDoc.data().messengerURL;
                    trips.push(trip);
                  }
                })
                .catch(err => {
                  console.log('Error getting user: ' + user.uid, err);
                });
            });
            this.setState({ trips: trips });
          },
          err => {
            console.log('Error getting user trips', err);
          }
        );
      }
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleSearch = () => {
    this.setState({ searched: !this.state.searched });
  };

  suggestionSearch(loc) {
    this.toggleSearch();
    this.setState({ dest: loc });
  }

  cardClicked(messengerURL) {
    window.open(messengerURL, '_blank');
  }

  render() {
    return (
      <>
        {this.state.currentUser && this.state.searched ? (
          <div className="home">
            <Container>
              <i onClick={this.toggleSearch} className="material-icons search-button">
                search
              </i>
              <Row className="justify-content-center">
                <Col xs={10} md={6}>
                  <h1 style={{ color: 'var(--primary)' }}>Pick Me Up</h1>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={10} md={6}>
                  Friend's trips to {this.state.dest}:
                </Col>
              </Row>
              {this.state.trips.map(trip => {
                return (
                  <Row key={trip.id} className="justify-content-center">
                    <Col xs={10} md={6}>
                      <Card border="primary" onClick={() => this.cardClicked(trip.messengerURL)}>
                        <Card.Body>
                          <Card.Title>
                            <Image className="trip-owner-picture" src={trip.userIMG} rounded /> {trip.displayName}
                            <i className="material-icons trip-card-action">message</i>
                          </Card.Title>
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
          </div>
        ) : (
          <div className="home-centered">
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
                      <Button variant="outline-secondary" disabled={this.state.dest === ''} onClick={this.toggleSearch}>
                        Go
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={10} md={6} className="suggestions-title">
                  Recent Searches:
                </Col>
              </Row>
              <Row className="justify-content-center suggestions-item">
                <Col xs={10} md={6}>
                  <ListGroup id="suggestions">
                    <ListGroup.Item
                      action
                      className="justify-content-between d-flex"
                      onClick={() => this.suggestionSearch('Geisel')}
                    >
                      Geisel
                      <i className="material-icons">book</i>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      className="justify-content-between d-flex"
                      onClick={() => this.suggestionSearch('Costco')}
                    >
                      Costco
                      <i className="material-icons">store</i>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      className="justify-content-between d-flex"
                      onClick={() => this.suggestionSearch("McDonald's")}
                    >
                      McDonald's
                      <i className="material-icons">fastfood</i>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </>
    );
  }
}

export default Home;
