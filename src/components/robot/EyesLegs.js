import React, { Component } from 'react';
import './Robot.css';

class EyesLegs extends Component {

  static defaultProps = {parentClass: null}

  render() {
    const { parentClass, dupParts } = this.props;

    return (
      <div className={parentClass}>
        { dupParts.map((dupPart) => (
          <div key={dupPart.id} className={dupPart.className}/>
        )) }
      </div>
    );
  }
}

export default EyesLegs;

