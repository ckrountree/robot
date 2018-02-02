import React, { Component } from 'react';
import './Robot.css';

class Eye extends Component {

  render() {
    return (
      <div>
        <div 
          className="eye-left"
          style={{
            transform:  "eye-left" ? 'translateX(-90%)' : 'translateX(25%)'
          }}
        ></div>
        <div 
          className="eye-right"
          style={{
            transform:  "eye-right" ? 'translateX(90%)' : 'translateX(-90%)'
          }}
        ></div>
      </div>
    );
  }
}

export default Eye;