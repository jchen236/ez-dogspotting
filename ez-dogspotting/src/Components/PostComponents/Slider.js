import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {

    

    toggleNext = () => {

    }

    togglePrev = () => {

    }

    generateContent = () => {

    }

  render() {
    let content = this.generateContent();
    return (
      <div className="Slider">
        <button id = "next" onClick = {this.toggleNext}> Next </button>
        <button id = "prev" onClick = {this.toggleNext}> Previous </button>

      </div>
    ); 
  }
}


export default Slider;
