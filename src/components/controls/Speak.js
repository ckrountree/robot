import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from './AudioPlayer';
import PropTypes from 'prop-types';

export default class Speak extends Component {
  constructor(props) {
    super(props);
    this.state = { audioOn: false };
    this.url = 'http://bit.ly/2nvjy10';
    this.audio = {};
    // this.handleClick = this.handleClick.bind(this);
  }


  onPlay = (e) => {
    if (this.state.audioOn) {
      this.setState({audioOn: false});
      this.audioOn.onPause();
    } else {
      this.setState({ audioOn: true });
      this.audioOn.onPlay();
    }
  }

  componentWillReceiveProps() {
    this.setState({ audioOn: true });
}

  render() {
    return (
      <div>
        <AudioPlayer/>
      <div 
        onClick={this.onPlay} 
        className={!this.state.audioOn ? 'Play' : 'Pause'}>
        <ReactAudioPlayer
          src={this.state.url}
          ref={(audio) => { this.audioOn = audio; }}
          autoPlay
          preload= "auto"
          volume={0.5}
        />
      </div>
      <div id="audio">
        <button id="speak-btn" type="button" onClick={this.onPlay} ref={(speakBtn) => { this.speakBtn = speakBtn }}></button>
      </div>
      </div>
    );
  }
};

Speak.propTypes = {
  audioOn: PropTypes.bool,
  url: PropTypes.string,
  audio: PropTypes.object
};


