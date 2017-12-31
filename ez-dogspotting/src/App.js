import React, { Component } from 'react';
import logo from './logo.svg';
import Post from './Components/Post'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Post/>
      </div>
    );
  }
}

export default App;
