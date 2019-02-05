import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col'>
              <h1>Pick Me Up</h1>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-10 col-md-8'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='material-icons'>search</i>
                  </span>
                </div>
                <input type='text' className='form-control' placeholder='Destination' aria-label='Destination' />
                <div className='input-group-append'>
                  <a className='btn btn-outline-secondary' role='button' href='/test'>
                    Go
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col'>
              <h4>Recent Searches</h4>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-8 col-md-6'>
              <ul className='list-group'>
                <a href='#' class='list-group-item list-group-item-action'>
                  Geisel
                </a>
                <a href='#' class='list-group-item list-group-item-action'>
                  Costco
                </a>
                <a href='#' class='list-group-item list-group-item-action'>
                  McDonald's
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
