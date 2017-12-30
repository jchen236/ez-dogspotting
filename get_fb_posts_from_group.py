# Inspired from https://github.com/minimaxir/facebook-page-post-scraper/
# Purposed to scrape images from posts in Dogspotting

import datetime
import time
import re
import json
from settings import *

try:
    from urllib.request import urlopen, Request
except ImportError:
    from urllib2 import urlopen, Request

def request_until_succeed(url):

    req = Request(url)
    success = False
    while not success:
        try:
            res = urlopen(req)
            if res.getcode() == 200: # Success code
                success = True
        except Exception as e:
            print(e)
            time.sleep(3)
            print("ERROR FOR URL {}: {}".format(url, datetime.datetime.now))
            print("Retrying\n")
    print("Success")
    return res.read()

# Convert text to csv friendly format
def unicode_decode(text):
    try:
        return text.encode('utf-8').decode()
    except UnicodeDecodeError:
        return text.encode('utf-8')


def constructFBPageFieldUrl(base_url):
    fields = "&fields=link,updated_time,type,picture,full_picture," + \
        "message,shares,reactions.limit(0).summary(true)"
    url = base_url + fields

    return url

def scrapeFBPageFeedPosts(group_id, access_token):
    has_next_page = True
    num_posts_processed = 0
    start_time = datetime.datetime.now()

    # Unix timestamp or strtotime valuet hat points to the end of the range of time-based data
    until = ''

    # Contains paging token that tells us where we left off during cursor pagination
    paging = ''
    base = "https://graph.facebook.com/v2.11"
    node = "/{}/feed".format(group_id)
    params = "/?limit={}&access_token={}".format(10, access_token)
    since = "&since={}".format(since_date) if since_date \
        is not '' else ''
    until = "&until={}".format(until_date) if until_date \
        is not '' else ''
    print("Begin Scraping Group")
    
    while has_next_page:
        until = '' if until is '' else "&until={}".format(until)
        paging = '' if until is '' else "&__paging_token={}".format(paging)
        base_url = base + node + params + since + until + paging
        url = constructFBPageFieldUrl(base_url)
        posts = json.loads(request_until_succeed(url))
        for post in posts['data']:
            processFBPageFeedPosts(post)
        # If there are more pages left
        if 'paging' in posts:
            next_url = posts['paging']['next']
            until = re.search('until=([0-9]*?)(&|$)', next_url).group(1)
            paging = re.search('__paging_token=(.*?)(&|$)', next_url).group(1)
        else:
            has_next_page = False
        time.sleep(10)

def processFBPageFeedPosts(post):
    # Processes a single post. Helper for scrapeFBPageFeedPosts
    print(post)
    print("="*30)


if __name__ == '__main__':
    scrapeFBPageFeedPosts(group_id, access_token)
    