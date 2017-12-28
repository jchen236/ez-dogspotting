# Inspired from https://github.com/minimaxir/facebook-page-post-scraper/
# Purposed to scrape images from posts in Dogspotting

import datetime
import time
import re
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
            if res.getcode() == 200:
                success = True
        except Exception as e:
            print(e)
            time.sleep(3)
            print("ERROR FOR URL {}: {}".format(url, datetime.datetime.now))
            print("Retrying\n")


def constructFBPageFieldUrl(base_url):
    fields = "&fields=link,updated_time,type,picture,full_picture," + \
        "message,shares,reactions.limit(0).summary(true),"
    url = base_url + fields

    return url

def scrapeFBPageFeedPosts(group_id, access_token, since_date, until_date):
    pass

def processFBPageFeedPosts(post):
    # Processes a single post. Helper for scrapeFBPageFeedPosts
    pass
    