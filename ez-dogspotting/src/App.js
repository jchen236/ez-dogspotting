import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Post from './Components/Post'
import './App.css';
import * as settings from './settings'
import { GROUP_ID, ACCESS_TOKEN } from './settings';
var format = require('string-format')
class App extends Component {

  constructor() {
    super();
    this.state = {
    }
    // Needs more?
  }


  componentDidMount() {
    console.log("Component Did Mount");
    scrapeFBPageFeedPosts(GROUP_ID, ACCESS_TOKEN);
    
  }

  constructFBPageFieldUrl = (baseUrl) => {
    const fields = '&fields=link,updated_time,type,picture,full_picture, \
    message,shares,reactions.limit(0).summary(true)';
    const url = baseUrl + fields
    return url
  }

  requestDataFromUrl = (url) => {
    axios.get(url)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("requestDataFromUrl finished calling");
  }

  scrapeFBPageFeedPosts = (groupID, accessToken) => {
    hasNextPage = true;
    numPostsScraped = 0;
    base = "https://graph.facebook.com/v2.11";

    since_date = '';
    until_date = '';

    paging = '';
    node = format("/{}/feed", groupID);
    params = format("/?limit={}&access_token={}", 10, accessToken);
    since = since_date !== '' ? format("&since={}",since_date) : '';
    until = until_date !== '' ? format("&until={}", until_date) : '';

    console.log("Begin Scraping Group");

    until = until == '' ? '' : format("&until={}", until);
    paging = paging == '' ? '' : format("&__paging_token={}", paging);
    baseUrl = base + node + params + since + until + paging;

    url = constructFBPageFieldUrl(baseUrl);

    requestDataFromUrl()

  }

  processFBPageFeedPosts = (post) => {

  }

  fetchData = (url) => {

  }

  render() {
    return (
      <div className="App">
        My App
        <Post/>
      </div>
    );
  }
}

export default App;
