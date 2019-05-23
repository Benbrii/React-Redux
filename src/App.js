import React, { Component } from 'react';
import './App.css';
import CounterContainer from './Redux/CounterContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (  
      <div><CounterContainer /></div>
    );
  }
}

export default App;