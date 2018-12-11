import React, { Component } from 'react';
import Reddit from './Reddit';


class App extends Component {
  render() {
    return (
      <Reddit givenUrl="https://www.reddit.com/r/reactjs.json"/>
    );
  }
}

export default App;
