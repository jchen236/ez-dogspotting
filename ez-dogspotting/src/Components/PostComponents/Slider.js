import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../Assets/css/default.min.css';

class Slider extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            currentSourceIndex: 0,
            numSources: 0,
            content: []
        };
        // Needs more?
    }

    componentWillReceiveProps(nextProps) {
        // console.log("henlo");
        // console.log(nextProps);
        this.generateContent(nextProps);
    }

    generateContent = (nextProps) => {
        let content = [];
        //console.log("niaa");
        //console.log(this.props);
        if(nextProps.types && nextProps.sources) {
            // console.log("in generate content");
            for(var i = 0; i < nextProps.sources.length; i++) {       
                // console.log("receiveddddd");
                // console.log(nextProps.sources[i]);
                // console.log(nextProps.types[i]);
                if(nextProps.types[i] == 'photo') {
                    content.push(<div> <img className = 'slider_img' src = {nextProps.sources[i]} /> </div>);
                }
                if(nextProps.types[i] == 'video') {
                    content.push(<div> <video className = 'slider_vid' src = {nextProps.sources[i]} controls autoplay/> </div>);
                }
            }
        }
        // console.log("wtf");
        // console.log(content);
        this.setState({
            content: content
        });
        this.setState({
            numSources: nextProps.sources.length
        })
    }

    toggleNext = () => {
        console.log("Toggle next");
        this.setState({
            currentSourceIndex: (this.state.currentSourceIndex + 1) % this.state.numSources
        });
        console.log(this.props);
    }

    togglePrev = () => {
        console.log("Toggle previous");
        this.setState({
            currentSourceIndex: Math.abs((this.state.currentSourceIndex - 1) % this.state.numSources)
        });
        console.log(this.props);
    }

  render() {
    //   console.log(this.state.content);
    //   console.log(this.state.currentSourceIndex);
    //   console.log(this.state.numSources);
    return (
      <div className="slider">
        {this.state.numSources > 1 && <button id = "next" onClick = {this.toggleNext}> Next </button>}
        {this.state.numSources > 1 && <button id = "prev" onClick = {this.togglePrev}> Previous </button> }
        <br/><br/>
        {this.state.content[this.state.currentSourceIndex]}
      </div>
    ); 
  }
}

export default Slider;
