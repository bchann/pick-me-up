import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
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
      <div className='home'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col'>
              <h1>Pick Me Up</h1>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-10 col-md-6'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='material-icons'>near_me</i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Destination'
                  aria-label='Destination'
                  value={this.state.dest}
                  onChange={this.handleChange}
                />
                <div className='input-group-append'>
                  <a className='btn btn-outline-secondary' role='button' href={'/routes/' + this.state.dest}>
                    Go
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-10 col-md-6 suggestions-title'>Recent Searches:</div>
          </div>

          <div className='row justify-content-center suggestions-item'>
            <div className='col-10 col-md-6'>
              <ul className='list-group'>
                <a
                  href='/routes/Geisel'
                  className='list-group-item list-group-item-action justify-content-between d-flex'
                >
                  Geisel
                  <i className='material-icons'>book</i>
                </a>
                <a
                  href='/routes/Costco'
                  className='list-group-item list-group-item-action justify-content-between d-flex'
                >
                  Costco
                  <i className='material-icons'>store</i>
                </a>
                <a
                  href="/routes/McDonald's"
                  className='list-group-item list-group-item-action justify-content-between d-flex'
                >
                  McDonald's
                  <i className='material-icons'>fastfood</i>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <nav className='nav nav-pills nav-justified fixed-bottom'>
          <a className='nav-item nav-link' href='/routes/Geisel'>
            <i className='material-icons'>directions_car</i>
          </a>
          <a className='nav-item nav-link active' href='/'>
            <i className='material-icons'>home</i>
          </a>
          <a className='nav-item nav-link' href='/friends'>
            <i className='material-icons'>face</i>
          </a>
        </nav>
      </div>
    );
  }
}

export default Home;
