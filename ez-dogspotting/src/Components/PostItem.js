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
        <div>
      <li>
        {this.state.link}
      </li>

      <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false">
    <div class="fb-xfbml-parse-ignore">
      <blockquote cite="https://www.facebook.com/facebook/videos/10153231379946729/">
        <a href="https://www.facebook.com/facebook/videos/10153231379946729/">How to Share With Just Friends</a>
        <p>How to share with just friends.</p>
        Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on Friday, December 5, 2014
      </blockquote>
    </div>
    </div>
      </div>
    ); 
  }
}



export default PostItem;
