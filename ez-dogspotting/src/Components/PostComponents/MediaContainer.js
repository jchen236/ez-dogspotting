import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GROUP_ID, ACCESS_TOKEN } from '../../settings';
import axios from 'axios';
import MediaPresenter from './MediaPresenter';
var format = require('string-format');

class Media extends Component {

    constructor() {
        super();
        this.state = {
          sources: []
        };
        // Needs more?
      }

    componentDidMount() {
        let ids = this.extractTargetIDFromAttachments();
        ids.map(id => {
            this.get_source_from_id(id);
        } );
    }

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
    
    extractMediaTypeFromAttachments = () => {
        if(this.props.attachmentData) {
            let attachmentData = this.props.attachmentData.data[0];
            if(attachmentData.subattachments) {
                console.log("This is a multi-part post");
                let media_types = attachmentData.subattachments.data.map(subattachment => {
                    return subattachment.type;
                });
                // console.log(media_types)
                return media_types;
            } else {
                console.log("this is a single-part post");
                return [this.props.type]
            }
        }
    }

    get_source_from_id = (id) => {
        const base_url = 'https://graph.facebook.com/v2.11';
        const node = format('/{}', id);
        const params = format('/?limit={}&access_token={}', 10, ACCESS_TOKEN);
        const fields = '&fields=source';
        const url = base_url + node + params + fields;
        console.log(url)
        axios.get(url)
            .then((response) => {
                console.log("done")
                console.log(response.data.source);
                this.setState({
                    sources: this.state.sources.concat([response.data.source])
                });
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("Media componentDidMount finished calling");
    }

  render() {
    var divStyle = {
        color: 'white',
        backgroundColor: 'red'
      };
      console.log(this.state.sources);
      let types = this.extractMediaTypeFromAttachments();
      console.log(types)
    return (
      <div className="Media">
      <h1 style ={divStyle} >
       {/* <MediaPresenter sources = {this.state.sources} /> */}
       {types}
       {this.state.sources}
        </h1>
      </div>
    ); 
  }
}


export default Media;
