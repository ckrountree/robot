import React, { Component } from 'react';
// import './Robot.css';

let buttonStyle = { margin: '10px 10px 10px 0' };

class AudioButton extends Component {
  render() {
    const { onAudioChange } = this.props;

    return (
      <button type="button" className="Audio" 
        style={buttonStyle}
        onClick={(event) => onAudioChange}></button>
    );
  }
}

export default AudioButton;