import React, { Component } from 'react';
import './Robot.css';
import Head from './Head';
import Body from './Body';
import Arm from './Arm';
import Leg from './Leg';
import Eye from './Eye';

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
      <Eye/>
      </div>
    );
  }
}

export default Robot;