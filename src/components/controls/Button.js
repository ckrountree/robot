import React, { Component } from 'react';
import '../robot/Robot.css';

let buttonStyle = { 
  position: 'fixed',
  bottom: '10px',
  height: '40px',
  width: '100px'
};

class Button extends Component {
  render() {
    const { audioOn, onClick, audio } = this.props;
    console.log(audio, 'audio HELLOOOO')
    return (
      <div className="audio">
      <button type="button" className="audio-button" 
        style={buttonStyle}
        onClick={onClick}>
        {audioOn ? 'Pause' : 'Speak'}
      </button>
      </div>
    );
  };
};

export default Button;


