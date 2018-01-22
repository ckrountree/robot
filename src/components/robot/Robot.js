import React, { Component } from 'react';
import './Robot.css';
import Head from './Head';
import Mouth from './Mouth';
import Eye from './Eye';
import Body from './Body';
import Arm from './Arm';
import Leg from './Leg';
import Audio from '../controls/Audio';

class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {audioOn: true};

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(prevState => ({
      audioOn: !prevState.audioOn
    }));
       event.preventDefault()
  }

  render() {
    const { audioOn }= this.state;

    return (
      <div className="Robot">
      <Head/>
      <Mouth/>
      <Eye/>
      <Body/>
      <Arm/>
      <Leg/>
      <Audio audioOn={audioOn}
        onClick={audioOn => this.handleClick(audioOn)}/>
      </div>
    );
  }
}

export default Robot;