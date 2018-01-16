import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../Assets/css/default.min.css';
var format = require('string-format');

class PostHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

   
  render() {
 
    return (
      <div className = 'post_header'>
      <h2> {this.props.user} </h2>
      <h2> {this.props.created_time} </h2>
      </div>
    ); 
  }
}


export default PostHeader;
