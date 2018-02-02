import React, { Component } from 'react';
import './Robot.css';

class Leg extends Component {

  render() {
    return (
      <div>
        <div 
          className="leg-left"
          style={{
            transform:  "leg-left" ? 'translateX(-90%)' : 'translateX(25%)'
          }}
        ></div>
        <div 
          className="leg-right"
          style={{
            transform:  "leg-right" ? 'translateX(90%)' : 'translateX(-90%)'
          }}
        ></div>
      </div>
    );
  }
}

export default Leg;