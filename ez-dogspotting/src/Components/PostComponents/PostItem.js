import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaContainer from './MediaContainer';
import PostMessage from './PostMessage';
import '../../Assets/css/default.min.css';
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
            updated_time: props.postData.updated_time,
            attachments: props.postData.attachments   
        };
        // Needs more?
      }

    
  render() {
//       let mediaContent;
//       if (this.state.type == 'video') {
//         mediaContent = 
//         <video src={this.state.source} controls>
// </video>
//       } else if (this.state.type == 'photo') {
//           mediaContent = 
//           <img src = {this.state.full_picture}/>
//       }
    return (
        <div className = "content_holder">
                    <PostMessage message = {this.state.message} />
                    <MediaContainer attachmentData = {this.state.attachments} type = {this.state.type} />
                    {/* {mediaContent} */}
                    {/* https://developers.facebook.com/docs/graph-api/reference/video */}
                    {/* 10156286978084467/?fields=source,message,created_time,updated_time,id,object_id,parent_id,link,child_attachments,type,actions,properties,attachments&limit=10 */}
                    {/* attachments->data->subattachments->data->target->id to get each id in the album 
                    once we the get ID, we can get the comments and likes.
                    attachments->data->subattachments->data->media->image->src to get the media 
                    attachments->data->subattachments->data->type to get the type (photo or video) */}
                </div>
    ); 
  }
}



export default PostItem;
