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
      let mediaLogic;
      if (this.state.type == 'video') {
        mediaLogic = 
        <div class="fb-video" data-href={this.state.link} data-height= "400" data-width="350" data-show-text="false">
        </div>;
      } else if (this.state.type == 'photo') {
          mediaLogic = 
            <div class="fb-post" data-href={this.state.link} data-height="400" data-width = "300" data-show-text="false">
            </div>
      }
    return (
        <div>
            {mediaLogic}
            <img src = "https://scontent.xx.fbcdn.net/v/t15.0-10/s720x720/24554368_10154924218011879_7690847458473017344_n.jpg?oh=6fd04d90bbe02469deed7670cc98cc97&oe=5AF4B8E2"/>
        </div>
    ); 
  }
}



export default PostItem;
