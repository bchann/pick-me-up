import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      </div>
    );
  }
}

export default App;
