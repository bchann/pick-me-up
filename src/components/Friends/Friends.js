import React, { Component } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Friends.scss';

const friends = {
  scott: {
    name: 'Scott Klemmer',
    image: 'https://d.ucsd.edu/srk/images/Portrait-2016-WebLarge.jpg',
    description: 'Cognitive Science Professor',
    messenger: 'https://d.ucsd.edu/srk/'
  },
  sunny: {
    name: 'Sunny Sun',
    image: 'https://graph.facebook.com/2200131936674760/picture',
    description: 'UCSD | Fourth Year | International Business',
    messenger: 'https://m.me/sunnyhihihi'
  },
  brian: {
    name: 'Brian Chan',
    image: 'https://graph.facebook.com/2283231108396144/picture',
    description: 'UCSD | Fourth Year | Computer Science Major',
    messenger: 'https://m.me/bciscool'
  },
  jerry: {
    name: 'Jerry Qing',
    image: 'https://graph.facebook.com/2252592364771649/picture',
    description: 'UCSD | Second Year | Computer Science Major',
    messenger: 'https://m.me/jerry.qing'
  }
};

class Friends extends Component {
  cardClicked(messengerURL) {
    window.open(messengerURL, '_blank');
  }

  render() {
    return (
      <div className="friends">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <h1 style={{ color: 'var(--primary)' }}>Pick Me Up</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              My Friends
            </Col>
          </Row>
          {Object.keys(friends).map(friend => {
            return (
              <Row key={friend} className="justify-content-center">
                <Col xs={10} md={6}>
                  <Card border="primary" onClick={() => this.cardClicked(friends[friend].messenger)}>
                    <Card.Body>
                      <Card.Title>
                        <Image className="trip-owner-picture" src={friends[friend].image} rounded />{' '}
                        {friends[friend].name}
                        <i className="material-icons trip-card-action">message</i>
                      </Card.Title>
                      <Card.Text>{friends[friend].description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Friends;
