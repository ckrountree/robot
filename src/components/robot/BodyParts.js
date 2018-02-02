import React, { Component } from 'react';
import './Robot.css';

class BodyParts extends Component {

  render() {
    return (
      <div>
        <div className="arm">
        </div>

        <div className="head">
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
        </div>

        <div className="mouth">
        </div>

        <div className="trunk">
        </div>

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

      </div>
    );
  }
}

export default BodyParts;

