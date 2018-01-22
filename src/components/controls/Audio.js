import React, { Component } from 'react';
// import Sound from 'react-sound';
import ReactAudioPlayer from 'react-audio-player';
import '../robot/Robot.css';

let buttonStyle = { 
  position: 'fixed',
  bottom: '10px',
  height: '40px',
  width: '100px'
};

class AudioButton extends Component {
  render() {
    const { audioOn, onAudioChange } = this.props;

    return (
      <div className="audio">
      <button type="button" className="audio-button" 
        style={buttonStyle}
        onClick={(event) => onAudioChange(event.target)}>AUDIO</button>
      <ReactAudioPlayer
        src="Countdown-Me-728881159.mp3"
        autoPlay
        preload= "auto"
        volume="0.5"
      />
      </div>
    );
  }
}

export default AudioButton;
