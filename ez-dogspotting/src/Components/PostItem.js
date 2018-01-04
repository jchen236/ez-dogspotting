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
      {/* <li>
        {this.state.link}
      </li> */}

      <div class="fb-video" data-href={this.state.link} data-height= "400" data-width="300" data-show-text="false">
    <div class="fb-xfbml-parse-ignore">
    </div>
    </div>
      </div>
    ); 
  }
}



export default PostItem;
