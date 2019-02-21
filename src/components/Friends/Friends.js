import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Friends.scss';

class Friends extends Component {
  render() {
    return (
      <div className="friends">
        <Container>Your Friends:</Container>
      </div>
    );
  }
}

export default Friends;
