import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from './Routes/Routes';
import Friends from './Friends/Friends';
import Home from './Home/Home';
import firebase, { auth, provider } from '../firebase.js';
import { Modal, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  render() {
    return (
      <>
        {/* App Routes */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/friends" component={Friends} />
          <Route path="/routes/:dest" render={props => <Routes {...props} />} />
          <Route component={Home} />
        </Switch>

        <Modal show={this.state.user === null} centered>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please login before using this app</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
