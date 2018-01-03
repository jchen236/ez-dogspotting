import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {

  render() {
    let posts;
    if(this.props.posts) {
      console.log("props received from app");
      posts = this.props.posts.map(post => {
        console.log("1");
        console.log(post)
      })
    }
    return (
      <h1>This is a post </h1>
    ); 
  }
}


export default Posts;
