import React, { Component } from 'react';
import './Routes.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dest: this.props.match.params.dest
    };
  }

  render() {
    return (
      <div className='routes'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-10 col-md-6'>
              <h1>Pick Me Up</h1>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-2 title-text'>From:</div>
            <div className='col-8 col-md-4 title-text'>Current Location</div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-2 title-text'>To:</div>
            <div className='col-8 col-md-4 title-text'>{this.state.dest}</div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-10 col-md-6'>Best Options:</div>
          </div>

          <div className='row'>
            <div className='col-6'>
              <div className='card'>
                <div className='card-header'>Bus</div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    MTS 202 @ 2:15PM
                    <span className='badge badge-secondary badge-pill'>5</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    UCSD Shuttle @ 2:20PM
                    <span className='badge badge-secondary badge-pill'>7</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    MTS 105 @ 2:20PM
                    <span className='badge badge-secondary badge-pill'>10</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    MTS 202 @ 2:30PM
                    <span className='badge badge-secondary badge-pill'>17</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-6'>
              <div className='card'>
                <div className='card-header'>Carpool</div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Brian <br /> Costa to Geisel @ 2:15PM
                    <span className='badge badge-secondary badge-pill'>5</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Sunny <br /> Axiom to CICC @ 2:30PM
                    <span className='badge badge-secondary badge-pill'>15</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='card'>
                <div className='card-header'>Walking</div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Villa La Jolla Drive <span className='badge badge-secondary badge-pill'>17</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Gilman Drive
                    <span className='badge badge-secondary badge-pill'>20</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-6'>
              <div className='card'>
                <div className='card-header'>Uber/Lyft</div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Uber $3.20 <span className='badge badge-secondary badge-pill'>12</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Lyft $2.70
                    <span className='badge badge-secondary badge-pill'>15</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className='nav nav-pills nav-justified fixed-bottom'>
          <a className='nav-item nav-link active' href='/routes/Geisel'>
            <i className='material-icons'>directions_car</i>
          </a>
          <a className='nav-item nav-link' href='/'>
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

export default Routes;
