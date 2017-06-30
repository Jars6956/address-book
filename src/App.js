import React, { Component } from 'react';
import MComponente from './components/Header';
import MFooter from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <MComponente title="add-book"/>
        <MFooter title="Copyright 2017 - PUCE "/>
      </div>
    );
  }
}

export default App;