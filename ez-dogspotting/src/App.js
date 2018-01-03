import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Posts from './Components/Posts'
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
    this.scrapeFBPageFeedPosts(GROUP_ID, ACCESS_TOKEN);
    
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
    let hasNextPage = true;
    let numPostsScraped = 0;
    const base = "https://graph.facebook.com/v2.11";

    let since_date = '';
    let until_date = '';

    let paging = '';
    const node = format("/{}/feed", groupID);
    const params = format("/?limit={}&access_token={}", 10, accessToken);
    let since = since_date !== '' ? format("&since={}",since_date) : '';
    let until = until_date !== '' ? format("&until={}", until_date) : '';

    console.log("Begin Scraping Group");

    until = until == '' ? '' : format("&until={}", until);
    paging = paging == '' ? '' : format("&__paging_token={}", paging);
    let baseUrl = base + node + params + since + until + paging;

    let url = this.constructFBPageFieldUrl(baseUrl);
    console.log(url)
    this.requestDataFromUrl()

  }

  processFBPageFeedPosts = (post) => {

  }

  fetchData = (url) => {

  }

  render() {
    return (
      <div className="App">
        My App
        <Posts/>
      </div>
    );
  }
}

export default App;
