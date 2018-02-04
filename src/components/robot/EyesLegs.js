import React, { Component } from 'react';
import './Robot.css';

class EyesLegs extends Component {

  render() {
    return (
      <div>

          <div 
            className="eye-left"
            style={{
              transform:  "eye-left" ? 'translateX(-90%)' : 'translateX(25%)'
            }}>
          </div>
          <div 
            className="eye-right"
            style={{
              transform:  "eye-right" ? 'translateX(90%)' : 'translateX(-90%)'
            }}>
          </div>

          <div 
            className="leg-left"
            style={{
              transform:  "leg-left" ? 'translateX(-90%)' : 'translateX(25%)'
            }}>
          </div>
          <div 
            className="leg-right"
            style={{
              transform:  "leg-right" ? 'translateX(90%)' : 'translateX(-90%)'
            }}>
          </div>

      </div>
    );
  }
}

export default EyesLegs;

