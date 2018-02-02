import React, { Component } from 'react';
import './Robot.css';
import BodyParts from './BodyParts';
import Speak from '../controls/Speak';

class Robot extends Component {
  render() {
    return (
      <div className="Robot">
        <BodyParts/>
        <Speak/>
      </div>
    );
  }
}

export default Robot;