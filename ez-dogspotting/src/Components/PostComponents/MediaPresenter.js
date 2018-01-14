import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import '../../Assets/css/default.min.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';

// This container just receives a list of URLs from the MediaContainer and renders them in the carousel
class MediaPresenter extends Component {

  render() {
    var settings = {
        autoplay: true,
        centerPadding: '80px',
      dots: true
    };

    let content = [];
    if(this.props.sources && this.props.types) {
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
    return (
        <div className = 'slider_container'>
            {/* {content} */}
            <Slider {...settings}>
               {content}
            </Slider>
        </div>
    );

  }
}


export default MediaPresenter;
