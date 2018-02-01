import React, { Component } from 'react';
import './Robot.css';
import Head from './Head';
import Mouth from './Mouth';
import Eye from './Eye';
import Body from './Body';
import Arm from './Arm';
import Leg from './Leg';
import Speak from '../controls/Speak';

class Robot extends Component {
  render() {
    return (
      <div className="Robot">
      <Head/>
      <Mouth/>
      <Eye/>
      <Body/>
      <Arm/>
      <Leg/>
      <Speak/>
      </div>
    );
  }
}

export default Robot;