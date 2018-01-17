import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../Assets/css/default.min.css';
var format = require('string-format');

class PostMessage extends Component {
   
  render() {
      let message;
    if(this.props.message) {
        message = this.props.message;
    } else {
        message = "No message!";
    }
    return (
      <div className = 'post_message'>
        <h3>{message}</h3>
      </div>
    ); 
  }
}


export default PostMessage;
