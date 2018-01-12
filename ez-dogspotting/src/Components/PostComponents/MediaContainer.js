import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GROUP_ID, ACCESS_TOKEN } from '../../settings';
import axios from 'axios';
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
        let sources = ids.map(id => {
            let foo = this.get_source_from_id(id);
            console.log(foo)
            console.log("foo")
            return foo;
        } );
        this.setState({ sources:sources });
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
                console.log(response.data);
                return response.data.source;
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
    return (
      <div className="Media">
      <h1 style ={divStyle} >
        {this.state.sources}
        </h1>
      </div>
    ); 
  }
}


export default Media;
