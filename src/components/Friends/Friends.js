import React, { Component } from 'react';
import './Friends.css';

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
      <div className='friends'>
        <div className='container'>
          Friends Screen
          <nav className='nav nav-pills nav-justified fixed-bottom'>
            <a className='nav-item nav-link' href='/routes/Geisel'>
              <i className='material-icons'>directions_car</i>
            </a>
            <a className='nav-item nav-link' href='/'>
              <i className='material-icons'>home</i>
            </a>
            <a className='nav-item nav-link active' href='/friends'>
              <i className='material-icons'>face</i>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Friends;
