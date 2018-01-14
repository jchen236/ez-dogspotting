import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GROUP_ID, ACCESS_TOKEN } from '../../settings';
import axios from 'axios';
import '../../Assets/css/default.min.css';
import Slider from './Slider';
var format = require('string-format');

class Media extends Component {

    constructor(props) {
        super(props);
        this.state = {
          sources: []
        };
        let ids = this.extractTargetIDFromAttachments();
        ids.map(id => {
            this.get_source_from_id(id);
        });
      }

    extractTargetIDFromAttachments = () => {
        if(this.props.attachmentData) {
            let attachmentData = this.props.attachmentData.data[0];
            if(attachmentData.subattachments) {
                let content_ids = attachmentData.subattachments.data.map(subattachment => {
                    return subattachment.target.id;
                });
                return content_ids;
            } else {
                return [attachmentData.target.id]
            }
        }
    }
    
    extractMediaTypeFromAttachments = () => {
        if(this.props.attachmentData) {
            let attachmentData = this.props.attachmentData.data[0];
            if(attachmentData.subattachments) {
                let media_types = attachmentData.subattachments.data.map(subattachment => {
                    return subattachment.type;
                });
                return media_types;
            } else {
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
        axios.get(url)
            .then((response) => {
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
      let types = this.extractMediaTypeFromAttachments();
      //console.log(types);
     // console.log(this.state.sources);
    return (
      <div className = 'media_container'>
       <Slider sources = {this.state.sources} types = {types} />
      </div>
    ); 
  }
}


export default Media;
