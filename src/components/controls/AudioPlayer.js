import React, { Component } from 'react';

export default class AudioPlayer extends Component {
    render() {
      console.log(this.props.url);
      return (
        <audio src={this.props.url}>
            Your browser does not support the <code>audio</code> element.
        </audio>
      ) 
    }
}

 