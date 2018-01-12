import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Media extends Component {


    extractTargetIDFromAttachments = () => {
        if(this.props.attachmentData) {
            let attachmentData = this.props.attachmentData.data[0];
            if(attachmentData.subattachments) {
                console.log("This is a multi-part post");
                let content_ids = attachmentData.subattachments.data.map(subattachment => {
                    return subattachment.target.id;
                });
                // console.log(content_ids)
                return content_ids;
            } else {
                console.log("this is a single-part post");
                return [attachmentData.target.id]
            }
        }
    }

  render() {
    let content_ids = this.extractTargetIDFromAttachments();
    var divStyle = {
        color: 'white',
        backgroundColor: 'red'
      };
      console.log(content_ids)
    return (
      <div className="Media">
      <h1 style ={divStyle} >
        {content_ids}
        </h1>
      </div>
    ); 
  }
}


export default Media;
