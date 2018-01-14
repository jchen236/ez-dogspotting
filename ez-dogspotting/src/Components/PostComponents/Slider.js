import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            currentSourceIndex: 0,
            numSources: props.sources.length,
            content: []
        };
        // Needs more?
    }


    componentWillReceiveProps(nextProps) {
        console.log("henlo");
        console.log(nextProps);
        this.generateContent(nextProps);
    }

    generateContent = (nextProps) => {
        let content = [];
        //console.log("niaa");
        //console.log(this.props);
        if(nextProps.types && nextProps.sources) {
            console.log("in generate content");
            for(var i = 0; i < nextProps.sources.length; i++) {       
                console.log("receiveddddd");
                console.log(nextProps.sources[i]);
                console.log(nextProps.types[i]);
                if(nextProps.types[i] == 'photo') {
                    content.push(<div> <img className = 'slider_img' src = {nextProps.sources[i]} /> </div>);
                } else {
                    content.push(<div> <video className = 'slider_vid' src = {nextProps.sources[i]} controls /> </div>);
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
      //console.log(this.props);
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
