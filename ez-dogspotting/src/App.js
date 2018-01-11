import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Posts from './Components/Posts'
import './App.css';
import * as settings from './settings'
import { GROUP_ID, ACCESS_TOKEN } from './settings';
import Header from './Components/HeaderComponents/Header';
import Footer from './Components/FooterComponents/Footer';
import './Assets/css/default.min.css';
var format = require('string-format')
class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
    // Needs more?
  }


  componentDidMount() {
    console.log("Component Did Mount");
    this.scrapeFBPageFeedPosts(GROUP_ID, ACCESS_TOKEN);
    
  }

  constructFBPageFieldUrl = (baseUrl) => {
    const fields = '&fields=link,object_id,source,updated_time,type,picture,full_picture, \
    message,shares,reactions.limit(0).summary(true)';
    const url = baseUrl + fields
    return url
  }

  requestDataFromUrl = (url) => {
    axios.get(url)
      .then((response) => {
        console.log(response.data.data);
        this.setState( {
          data: response.data.data
      }) 
    })
      .catch((error) => {
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
    const params = format("/?limit={}&access_token={}", 30, accessToken);
    let since = since_date !== '' ? format("&since={}",since_date) : '';
    let until = until_date !== '' ? format("&until={}", until_date) : '';

    console.log("Begin Scraping Group");

    until = until == '' ? '' : format("&until={}", until);
    paging = paging == '' ? '' : format("&__paging_token={}", paging);
    let baseUrl = base + node + params + since + until + paging;

    let url = this.constructFBPageFieldUrl(baseUrl);
    console.log(url)
    this.requestDataFromUrl(url)

  }

  processFBPageFeedPosts = (post) => {

  }

  fetchData = (url) => {

  }

  render() {
    return (
      <div className="App">
       <Header />
        My App
        {/* {
          ((d, s, id) => {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11";
            fjs.parentNode.insertBefore(js, fjs);
          })(document, 'script', 'facebook-jssdk')
        } */}
        <Posts posts = {this.state.data}/>
      </div>
    );
  }
}

export default App;
