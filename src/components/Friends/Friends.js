import React, { Component } from 'react';
import './Friends.scss';
import { Container } from 'react-bootstrap';
import BottomNav from '../BottomNav/BottomNav';

class Friends extends Component {
  render() {
    return (
      <div className="friends">
        <Container>Friends Screen</Container>
        <BottomNav activeTab="friends" />
      </div>
    );
  }
}

export default Friends;
