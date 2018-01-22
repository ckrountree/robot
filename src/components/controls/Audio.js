import React, { Component } from 'react';
import '../robot/Robot.css';

let buttonStyle = { 
  position: 'fixed',
  bottom: '10px',
  height: '40px',
  width: '100px'
};

class AudioButton extends Component {
  render() {
    const { onAudioChange } = this.props;

    return (
      <div className="audio">
      <button type="button" className="audio-button" 
        style={buttonStyle}
        onClick={(event) => onAudioChange}>AUDIO</button>
      </div>
    );
  }
}

export default AudioButton;