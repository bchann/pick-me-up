import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './BottomNav.scss';

class BottomNav extends Component {
  render() {
    return (
      <Nav justify variant="pills" className="fixed-bottom">
        <Nav.Item>
          <Nav.Link className="nav-item" href="/routes/Geisel" active={this.props.activeTab === 'routes'}>
            <i className="material-icons">directions_car</i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-item" href="/home" active={this.props.activeTab === 'home'}>
            <i className="material-icons">home</i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-item" href="/friends" active={this.props.activeTab === 'friends'}>
            <i className="material-icons">face</i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default BottomNav;
