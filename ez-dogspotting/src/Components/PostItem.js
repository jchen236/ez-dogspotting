import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Assets/css/default.min.css';
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
            source: props.postData.source,
            updated_time: props.postData.updated_time      
        };
        // Needs more?
      }

    getIDFromVideoLink = (link) => {
        
    }
    
  render() {
      let mediaContent;
      if (this.state.type == 'video') {
        mediaContent = 
        <video src={this.state.source} height="484" width="860" controls>
</video>
      } else if (this.state.type == 'photo') {
          mediaContent = 
          <img src = {this.state.picture}/>
      }
    return (
        <div className = "postitem">
            {mediaContent}
            {/* https://developers.facebook.com/docs/graph-api/reference/video */}
            
        </div>
    ); 
  }
}



export default PostItem;
