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
    this.base_url = 'https://graph.facebook.com/v2.11';
    this.paging = ''
    this.node = format('/{}/feed', GROUP_ID)
    this.params = format('/?limit={}&access_token={}', 10, ACCESS_TOKEN)
    // Needs more?
  }


  componentDidMount() {

    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(format('Hello, {}', 'World'));
  }

  constructFBPageFieldUrl = (baseUrl) => {
    const fields = '&fields=link,updated_time,type,picture,full_picture, \
    message,shares,reactions.limit(0).summary(true)';
    const url = baseUrl + fields
    return url
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
