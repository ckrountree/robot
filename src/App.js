import React, { Component } from 'react';
import Robot from './components/robot/Robot';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Robots</h1>
        </header>
        <main>
          <Robot/>
        </main>
      </div>
    );
  }
}

export default App;
