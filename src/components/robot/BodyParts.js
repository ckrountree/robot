import React, { Component } from 'react';
import EyesLegs from './EyesLegs';
import './Robot.css';

class BodyParts extends Component {

  render() {
    return (
      <div>
        <div className="arm"/>

        <EyesLegs 
          parentClass="head" 
          dupParts={[
            {
              id: 0, 
              className: 'eye-left translateXm90'
            },
            {
              id: 1,
              className: 'eye-right translateX90'
            }
          ]}
        />

        <div className="mouth"/>

        <div className="trunk"/>

        <EyesLegs 
          dupParts={[
            {
              id: 0,
              className: 'leg-left translateXm90'
            },
            {
              id: 1,
              className: 'leg-right translateX90'
            }
          ]}
        />

      </div>
    );
  }
}

export default BodyParts;

