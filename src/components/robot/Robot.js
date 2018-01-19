import React, { Component } from 'react';
import './Robot.css';
import Head from './Head';
import Body from './Body';
import Arm from './Arm';
import Leg from './Leg';

class Robot extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Robot">
      <Head/>
      <Body/>
      <Arm/>
      <Leg/>
      </div>
    );
  }
}

export default Robot;