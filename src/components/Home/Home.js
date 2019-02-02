import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/components/Home/Home.js</code> and save to reload.
          </p>
          <a class='btn btn-primary' href='/test' role='button'>
            Route Test
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
