import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Media extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attachments: props.attachmentData.data[0],
            content_ids: []
        };
        this.extractTargetIDFromAttachments();
      }

    extractTargetIDFromAttachments = () => {
        if(this.state.attachments.subattachments) {
            console.log("This is a multi-part post");
            const content_ids = this.state.attachments.subattachments.data.map(subattachment => {
                return subattachment.target.id;
            });
            console.log(content_ids)
            this.setState({
                content_ids: content_ids
            });
        } else {
            console.log("this is a single-part post");
            console.log(this.state.attachments.target.id)
            this.setState({
                content_ids: [this.state.attachments.target.id]
            });
        }
    }

  render() {
    var divStyle = {
        color: 'white',
        backgroundColor: 'red'
      };
      console.log(this.state.content_ids);
    return (
      <div className="Media">
      <h1 style ={divStyle} >
        {this.state.content_ids}
        </h1>
      </div>
    ); 
  }
}


export default Media;
