import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This container just receives a list of URLs from the MediaContainer and renders them in the carousel
class MediaPresenter extends Component {

  render() {
    let content = [];
    if(this.props.sources && this.props.types) {
        for(var i = 0; i < this.props.sources.length; i++) {
            console.log(this.props.sources[i]);
            console.log(this.props.types[i]);
            if(this.props.types[i] == 'photo') {
                content.push(<img src = {this.props.sources[i]} />);
            } else {
                content.push(<video src = {this.props.sources[i]} controls />);
            }
        }
    }
    return (
        <div>
            {content}
        </div>
    );

  }
}


export default MediaPresenter;
