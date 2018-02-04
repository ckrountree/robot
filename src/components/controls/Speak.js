import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from './AudioPlayer';
import PropTypes from 'prop-types';

export default class Speak extends Component {
  constructor(props) {
    super(props);
    this.audio = null;
    // this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   const audio = this.audio
  //   // enough downloaded to begin play
  //   audio.addEventListener((e) => {
  //     this.props.onReadyPlay && this.props.onReadyPlay(e);
  //   });
  // }

  onPlay = () => {
    this.audio.play()
    // if (this.state.audioOn) {
    //   this.setState({audioOn: false});
    //   this.audioOn.onPause();
    // } else {
    //   this.setState({ audioOn: true });
    //   this.audioOn.onPlay();
    // }
  }

  render() {
    // return (
    //   <div>
    //     <AudioPlayer/>
    //   <div 
    //     onClick={this.onPlay} 
    //     className={!this.state.audioOn ? 'Play' : 'Pause'}>
    //     <ReactAudioPlayer
    //       src={this.state.url}
    //       ref={(audio) => { this.audioOn = audio; }}
    //       autoPlay
    //       preload= "auto"
    //       volume={0.5}
    //     />
    //   </div>
    //   </div>
    // );
    return (
      <div>
        <audio 
          src={this.props.url}
          ref={(audio) => this.audio = audio}>
            Your browser does not support the <code>audio</code> element.
        </audio>
        <div className="audio">
          <button className="speak-btn" type="button" onClick={this.onPlay}>SPEAK</button>
        </div>
      </div>
    );
  }
};

Speak.propTypes = {
  url: PropTypes.string.isRequired
};




