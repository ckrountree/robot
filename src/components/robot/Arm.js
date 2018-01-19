import React, { Component } from 'react';
import './Robot.css';

class Arm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { arm } = this.props;

    return (
      <div className="Arm"></div>
    );
  }
}

export default Arm;