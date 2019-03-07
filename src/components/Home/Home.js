import React, { Component } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, ListGroup, Card, Image } from 'react-bootstrap';
import ReactGA from 'react-ga';
import './Home.scss';

const TripCard = props => (
  <Row className="justify-content-center">
    <Col xs={10} md={6}>
      <Card border="primary" onClick={() => props.cardClicked(props.trip.messengerURL)}>
        <Card.Body>
          <Card.Title>
            <Image className="trip-owner-picture" src={props.trip.userIMG} rounded /> {props.trip.displayName}
            <i className="material-icons card-action-icon">message</i>
          </Card.Title>
          <Card.Text>
            Driving from {props.trip.from} to {props.trip.to} at {props.trip.time}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      dest: '',
      searched: false,
      trips: this.props.trips,
      displayedTrips: [],
      users: this.props.users,
      activeRoute: window.location.pathname,
      recentSearches: [],
      favoritePlaces: ['Geisel', 'UCSD']
    };

    this.getDisplayedTrips();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({ currentUser: this.props.currentUser });
      this.getDisplayedTrips();
    }

    if (prevProps.trips !== this.props.trips) {
      this.setState({ trips: this.props.trips });
      this.getDisplayedTrips();
    }

    if (prevProps.users !== this.props.users) {
      this.setState({ users: this.props.users });
      this.getDisplayedTrips();
    }
  }

  getDisplayedTrips() {
    var user = this.state.currentUser;

    if (user && this.props.users && this.props.users.length && this.props.trips && this.props.trips.length) {
      var displayedTrips = [];
      this.props.trips.forEach(trip => {
        var tripOwner = this.props.users.find(user => {
          return user.id === trip.createdBy;
        });

        if (tripOwner) {
          trip.userIMG = tripOwner.photoURL;
          trip.messengerURL = tripOwner.messengerURL;

          // Filter here
          if (
            tripOwner.id !== user.uid &&
            this.state.dest &&
            trip.to
              .trim()
              .toLowerCase()
              .includes(this.state.dest.trim().toLowerCase())
          ) {
            displayedTrips.push(trip);
          }
        }
      });
      this.setState({ displayedTrips });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleSearch = () => {
    if (this.state.searched) {
      this.setState({ searched: false, dest: '' });
    } else {
      this.getDisplayedTrips();
      this.addRecentSearch(this.state.dest);
      this.setState({ searched: true });
    }
  };

  suggestionSearch(dest, src) {
    if (src === 'favorite') {
      ReactGA.event({
        category: 'User',
        action: 'Clicked favorited search'
      });
    }

    if (src === 'popular') {
      ReactGA.event({
        category: 'User',
        action: 'Clicked popular search'
      });
    }

    this.setState({ dest }, () => {
      this.toggleSearch();
    });
  }

  addRecentSearch(loc) {
    var recentSearches = this.state.recentSearches;

    if (loc) {
      if (recentSearches.length >= 3) {
        recentSearches.pop();
      }

      var ind = recentSearches.indexOf(loc);
      if (ind > -1) {
        recentSearches.splice(ind, 1);
      }

      recentSearches.unshift(loc);

      this.setState({ recentSearches });
    }
  }

  toggleFavorite = () => {
    var favoritePlaces = this.state.favoritePlaces;
    if (this.state.dest) {
      if (favoritePlaces.includes(this.state.dest)) {
        var ind = favoritePlaces.indexOf(this.state.dest);
        if (ind > -1) {
          favoritePlaces.splice(ind, 1);
        }
      } else {
        favoritePlaces.push(this.state.dest);
      }
      this.setState({ favoritePlaces });
    }
  };

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
                arrow_back
              </i>
              <Row className="justify-content-center">
                <Col xs={10} md={6}>
                  <h1 className="search-title">Pick Me Up</h1>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={10} md={6}>
                  {this.state.displayedTrips.length
                    ? "Friend's trips to " + this.state.dest + ':'
                    : 'There are no trips to ' + this.state.dest + '. Would you like to offer a ride?'}
                </Col>
              </Row>
              <Row className="justify-content-center favorite-row">
                <Col className="d-flex justify-content-end" xs={10} md={6}>
                  {this.state.activeRoute !== '/popular' && this.state.displayedTrips.length ? (
                    <>
                      Favorite this destination &nbsp;
                      <i onClick={this.toggleFavorite} className="material-icons favorite-icon">
                        {this.state.favoritePlaces.includes(this.state.dest) ? 'star' : 'star_border'}
                      </i>
                    </>
                  ) : null}
                </Col>
              </Row>
              {this.state.displayedTrips.map(trip => {
                return <TripCard key={trip.id} cardClicked={this.cardClicked} trip={trip} />;
              })}
            </Container>
          </div>
        ) : (
          <div className="home-centered">
            <Container>
              <Row className="justify-content-center no-margin">
                <Col xs={10} md={6}>
                  <h1 className="home-title">Pick Me Up</h1>
                </Col>
              </Row>
              <Row className="justify-content-center no-margin">
                <Col xs={10} md={6}>
                  <p className="slogan">Trips are more fun with friends</p>
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
                      placeholder="Destination Name"
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
              {this.state.activeRoute === '/popular' ? (
                <>
                  <Row className="justify-content-center">
                    <Col xs={10} md={6} className="suggestions-title">
                      Popular Places:
                    </Col>
                  </Row>
                  <Row className="justify-content-center suggestions-item">
                    <Col xs={10} md={6}>
                      <ListGroup id="suggestions">
                        <ListGroup.Item
                          action
                          className="justify-content-between d-flex"
                          onClick={() => this.suggestionSearch('Vallartas', 'popular')}
                        >
                          Vallartas
                          <i className="material-icons">fastfood</i>
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          className="justify-content-between d-flex"
                          onClick={() => this.suggestionSearch('Costco', 'popular')}
                        >
                          Costco
                          <i className="material-icons">store</i>
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          className="justify-content-between d-flex"
                          onClick={() => this.suggestionSearch('Geisel', 'popular')}
                        >
                          Geisel
                          <i className="material-icons">book</i>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </>
              ) : (
                <>
                  {this.state.favoritePlaces.length ? (
                    <Row className="justify-content-center">
                      <Col xs={10} md={6} className="suggestions-title">
                        Favorite Destinations:
                      </Col>
                    </Row>
                  ) : null}
                  <Row className="justify-content-center suggestions-item">
                    <Col xs={10} md={6}>
                      <ListGroup id="suggestions">
                        {this.state.favoritePlaces.map(favorite => {
                          return (
                            <ListGroup.Item
                              key={favorite}
                              action
                              onClick={() => this.suggestionSearch(favorite, 'favorite')}
                            >
                              {favorite}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </Col>
                  </Row>
                </>
              )}
              {this.state.recentSearches.length ? (
                <Row className="justify-content-center">
                  <Col xs={10} md={6} className="suggestions-title">
                    Recent Searches:
                  </Col>
                </Row>
              ) : null}
              <Row className="justify-content-center suggestions-item">
                <Col xs={10} md={6}>
                  <ListGroup id="recent">
                    {this.state.recentSearches.map(search => {
                      return (
                        <ListGroup.Item key={search} action onClick={() => this.suggestionSearch(search, 'recent')}>
                          {search}
                        </ListGroup.Item>
                      );
                    })}
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
