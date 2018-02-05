import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Speak extends Component {
  constructor(props) {
    super(props);
    this.audio = null;
  }

  onPlay = () => {
    this.audio.play()
  }

  render() {
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




