import React, { Component } from 'react';
import './Friends.css';
import { Container } from 'react-bootstrap';

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
      </div>
    );
  }
}

export default Friends;
