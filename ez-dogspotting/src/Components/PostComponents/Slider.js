import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            currentSourceIndex: 0,
            numSources: props.sources.length,
            content: []
        };
        this.generateContent();
        // Needs more?
    }

    generateContent = () => {
        let content = [];
        //console.log("niaa");
        if(this.props.types && this.props.sources) {
            for(var i = 0; i < this.props.sources.length; i++) {
                // console.log("receiveddddd");
                // console.log(this.props.sources[i]);
                // console.log(this.props.types[i]);
                if(this.props.types[i] == 'photo') {
                    content.push(<div> <img className = 'slider_img' src = {this.props.sources[i]} /> </div>);
                } else {
                    content.push(<div> <video className = 'slider_vid' src = {this.props.sources[i]} controls /> </div>);
                }
            }
        }
        // console.log("wtf");
        // console.log(content);
        this.setState({
            content: content
        });
    }

    toggleNext = () => {
        this.setState({
            currentSourceIndex: (this.state.currentSourceIndex + 1) % this.state.numSources
        });
    }

    togglePrev = () => {
        this.setState({
            currentSourceIndex: (this.state.currentSourceIndex - 1) % this.state.numSources
        });
    }

  render() {
    return (
      <div className="slider">
        <button id = "next" onClick = {this.toggleNext}> Next </button>
        <button id = "prev" onClick = {this.toggleNext}> Previous </button>
        {this.state.content[this.state.currentSourceIndex]}
      </div>
    ); 
  }
}


export default Slider;
