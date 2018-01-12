import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Media extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attachments: props.attachmentData.data[0],
            content_ids: []
        };
        extractTargetIDFromAttachments();
      }

    extractTargetIDFromAttachments = () => {
        let id_list = [];
        if(this.state.subattachments) {
            console.log("This is a multi-part post");
            let subattachments = this.state.subattachments.data;
            this.setState({
                content_ids: subattachments.map(subattachment => {
                    subattachment.target.id;
                })
            });
        } else {
            console.log("this is a single-part post");
            this.setState({
                content_ids: [this.state.attachments.target.id]
            });
        }
    }
      
  render() {
    return (
      <div className="Media">
        MediaComponent
      </div>
    ); 
  }
}


export default Media;
