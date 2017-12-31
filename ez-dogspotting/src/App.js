import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Post from './Components/Post'
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

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
