import React, { Component } from 'react';
import './Robot.css';

class Leg extends Component {

  render() {
    const { leg } = this.props;

    return (
      <div>
        <div 
          className="left"
          style={{
            transform:  "left" ? 'translateX(-90%)' : 'translateX(25%)'
          }}
        ></div>
        <div 
          className="right"
          style={{
            transform:  "right" ? 'translateX(90%)' : 'translateX(-90%)'
          }}
        ></div>
      </div>
    );
  }
}

export default Leg;