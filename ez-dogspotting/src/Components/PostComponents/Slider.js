import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {


    constructor(props) {
        super(props);
        this.state = {
            currentSourceIndex: 0,
            numSources: props.sources.length,
            content: {generateContent()}
        };
        // Needs more?
    }


    toggleNext = () => {
        this.setState({
            currentSourceIndex: (currentSourceIndex + 1) % this.state.numSources
        });
    }

    togglePrev = () => {
        this.setState({
            currentSourceIndex: (currentSourceIndex - 1) % this.state.numSources
        });
    }

    generateContent = () => {
        let content = [];
        if(this.props.types && this.props.sources) {
            for(var i = 0; i < this.props.sources.length; i++) {
                console.log(this.props.sources[i]);
                console.log(this.props.types[i]);
                if(this.props.types[i] == 'photo') {
                    content.push(<div> <img className = 'slider_img' src = {this.props.sources[i]} /> </div>);
                } else {
                    content.push(<div> <video className = 'slider_vid' src = {this.props.sources[i]} controls /> </div>);
                }
            }
        }
        return content;
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
