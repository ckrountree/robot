import React, { Component } from 'react';
import './Robot.css';

class Leg extends Component {

  render() {
    return (
      <div>
        <div 
          className="left-leg"
          style={{
            transform:  "left-leg" ? 'translateX(-90%)' : 'translateX(25%)'
          }}
        ></div>
        <div 
          className="right-leg"
          style={{
            transform:  "right-leg" ? 'translateX(90%)' : 'translateX(-90%)'
          }}
        ></div>
      </div>
    );
  }
}

export default Leg;