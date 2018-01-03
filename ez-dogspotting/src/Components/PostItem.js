import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.postData.id,
            link: props.postData.link,
            type: props.postData.type,
            full_picture: props.postData.full_picture,
            picture: props.postData.picture,
            message: props.postData.message,
            reactions: props.postData.reactions,
            shares: props.postData.shares,
            updated_time: props.postData.updated_time      
        };
        // Needs more?
      }
    
  render() {
    return (
      <li>
        {this.state.link}
      </li>
    ); 
  }
}



export default PostItem;
