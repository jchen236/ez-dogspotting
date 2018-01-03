import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
const uuidv4 = require('uuid/v4');

class Posts extends Component {

  render() {
    let postItems;
    if(this.props.posts) {
      console.log("props received from app to Posts");
      postItems = this.props.posts.map(post => {

        return (
          <PostItem key = {uuidv4()} postData = {post}/>
        )
      })
    }
    return (
      <div className="Posts">
      <h3> Post List </h3>
        {postItems}
      </div>
    ); 
  }
}


export default Posts;
