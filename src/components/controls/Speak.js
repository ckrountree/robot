import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Button from './Button';

class Speak extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      audioOn: false,
      url: 'https://www.icloud.com/iclouddrive/0rUSCw5VlhTacr0W70Spqx7rw#Countdown-Me-728881159.mp3',
      audio: new Audio(this.url)
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(previousState => ({
      audioOn: true
    }));
  }

  render() {
    return (
      <div className="audio">
        <Button onClick={this.handleClick} audio={this.state.audioOn}/>
        <ReactAudioPlayer
          src={this.state.url}
          ref={ (audioOn) => { this.audioOn = audioOn } }
          autoPlay
          preload= "auto"
          volume={1}
        />
      </div>
    );
  }
}

export default Speak;

