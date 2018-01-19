import React, { Component } from 'react';
import './Robot.css';

class Eye extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { eye } = this.props;

    return (
      <div>
        <div 
          className="left-eye"
          style={{
            transform:  "left" ? 'translateX(-90%)' : 'translateX(25%)'
          }}
        ></div>
        <div 
          className="right-eye"
          style={{
            transform:  "right" ? 'translateX(90%)' : 'translateX(-90%)'
          }}
        ></div>
      </div>
    );
  }
}

export default Eye;