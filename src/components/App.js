import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Routes from './Routes/Routes';
import Friends from './Friends/Friends';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        {/* App Routes */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/friends" component={Friends} />
          <Route path="/routes/:dest" render={props => <Routes {...props} />} />
          <Route component={Home} />
        </Switch>

        <Nav justify variant="pills" className="fixed-bottom">
          <Nav.Item>
            <Nav.Link href="/routes/Geisel">
              <i className="material-icons">directions_car</i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              <i className="material-icons">home</i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/friends">
              <i className="material-icons">face</i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default App;
