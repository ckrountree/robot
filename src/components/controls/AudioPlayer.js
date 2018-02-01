import React, { Component } from 'react';

export default class AudioPlayer extends Component {
    render() {
      return (
        <audio 
          src={this.props.audio}
          ref={(audio) => { this.audio = audio }}
          autoPlay>
            Your browser does not support the <code>audio</code> element.
        </audio>
      ) 
    }
}