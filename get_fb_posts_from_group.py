# Inspired from https://github.com/minimaxir/facebook-page-post-scraper/
# Purposed to scrape images from posts in Dogspotting

import datetime
import time
import re
try:
    from urllib.request import urlopen, Request
except ImportError:
    from urllib2 import urlopen, Request


def constructFBPageFieldUrl(base_url):
    fields = "&fields=link,updated_time,type,picture,full_picture," + \
        "message,shares,reactions.limit(0).summary(true),"
    url = base_url + fields

    return url

    