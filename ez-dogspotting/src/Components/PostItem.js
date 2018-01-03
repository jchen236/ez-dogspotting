import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostItem extends Component {
    
  render() {
    let postData;
    if (this.props.postData) {
        console.log("Props received from Posts to PostItem");
        console.log(this.props.postData);
    }
    return (
      <li>
        This is a post item
      </li>
    ); 
  }
}



export default PostItem;
