import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from './Routes/Routes';
import Friends from './Friends/Friends';
import Home from './Home/Home';
import { auth, provider } from '../firebase.js';
import { Button, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.closeModal = this.closeModal.bind(this);

    this.state = {
      show: true,
      user: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  login = () => {
    auth.signInWithPopup(provider).then(user => {
      this.setState({ user });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({ user: null });
    });
  };

  closeModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <OverlayTrigger
          trigger="click"
          rootClose={true}
          placement="bottom"
          overlay={
            <Popover id="popover-basic" title={this.state.user ? this.state.user.displayName : 'Login'}>
              <Button onClick={this.state.user ? this.logout : this.login}>
                {this.state.user ? 'Logout' : 'Login'}
              </Button>
            </Popover>
          }
        >
          <Image
            className="profile-img"
            src={this.state.user ? this.state.user.photoURL : require('../pictures/missing-user-image.png')}
            roundedCircle
            height="50"
            width="50"
          />
        </OverlayTrigger>

        {/* App Routes */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/friends" component={Friends} />
          <Route path="/routes/:dest" render={props => <Routes {...props} />} />
          <Route component={Home} />
        </Switch>

        {/* <Modal show={this.state.user === null && this.state.show} onHide={this.closeModal} centered>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please login before using this app</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.login}>
              Login with Facebook
            </Button>
          </Modal.Footer>
        </Modal> */}
      </>
    );
  }
}

export default App;
