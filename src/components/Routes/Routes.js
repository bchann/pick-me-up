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
        <h2>Routes to {this.state.dest}</h2>
      </div>
    );
  }
}

export default Routes;
