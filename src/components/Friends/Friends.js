import React, { Component } from 'react';
import './Friends.scss';
import { Container } from 'react-bootstrap';
import BottomNav from '../BottomNav/BottomNav';

class Friends extends Component {
  constructor() {
    super();
    this.state = { dest: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ dest: e.target.value });
  };

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
