import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This container just receives a list of URLs from the MediaContainer and renders them in the carousel
class MediaPresenter extends Component {

  render() {
    let sources;
    if(this.props.sources) {
        sources = this.props.sources.map(source => {
            //console.log(project);
            return (
                <div> <img src = {source}/> </div>
            );
        });
    }
    return (
        <div> </div>
    );

  }
}


export default MediaPresenter;
