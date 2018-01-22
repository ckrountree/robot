import React, { Component } from 'react';
import Sound from 'react-sound';
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
        <Sound
          url="cool_sound.mp3"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300}
    />
      </div>
    );
  }
}

export default AudioButton;
