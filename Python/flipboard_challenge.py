# coding=utf-8

# problem: https://challenge.flipboard.com/
# author: Wizmann

import requests
import json
import copy
import urlparse
import sys
from Queue import Queue

def get_skey():
    url = 'https://challenge.flipboard.com/start'
    r = requests.get(url)
    d = urlparse.urlparse(r.url)
    q = d.query
    return urlparse.parse_qs(q)['s'][0]

def get_url(now, s):
    return 'https://challenge.flipboard.com/step?s=%s&x=%d&y=%d' % (s, now['x'], now['y'])

def do_solve(skey):
    q = Queue()
    q.put_nowait({'x': 0, 'y': 0, 's': ''})
    s = set()
    while not q.empty():
        sys.stdout.write('.')
        sys.stdout.flush()
        now = q.get_nowait()
        url = get_url(now, skey)
        r = requests.get(url)
        d = r.json()
        s.add((now['x'], now['y']))
        now['s'] += d['letter']
        if d['end']:
            return now['s']
            break
        else:
            for xy in d['adjacent']:
                x, y = xy['x'], xy['y']
                if (x, y) in s:
                    continue
                nxt = copy.deepcopy(now)
                nxt['x'], nxt['y'] = x, y
                q.put_nowait(nxt)

def get_result(skey, path):
    url = 'https://challenge.flipboard.com/check?s=%s&guess=%s' % (skey, path)
    return requests.get(url).json()['success']

def solve():
    skey = get_skey()
    path = do_solve(skey)
    result = get_result(skey, path)
    print ''
    print skey, path, result
    assert(result)

if __name__ == '__main__':
    for i in xrange(10):
        print 'Case %d: ' % (i + 1)
        solve()

'''
Case 1: 
............
3308072928297290642.5 ofgaduytcg True
Case 2: 
..................................
5944855664468013875.9 eapfptnurduttrhbrzqkfrfqjqvqkt True
Case 3: 
..........................................................................................
5062194797950751009.21 jxhalbgexfukxylfxmkvucuuwheqrwobikiezguqekilcnwplshakklgabotpotlhyel True
Case 4: 
..........................................
2779089805440578707.9 rsoffwdmnyrtelhspfoqrcfhuuzrkw True
Case 5: 
...........
883201290153522579.16 vhfbxxiisvh True
Case 6: 
..............
3190323612637352216.16 jamigibsciimno True
Case 7: 
.....
7218259476220316415.11 wmcsx True
Case 8: 
...........................
6494069559906467644.15 xestuocxvtwtdizshlbayqtb True
Case 9: 
..........................
7801111921922131010.11 nhtsidrvvkrbognzsqcozlhng True
Case 10: 
.....
5388978888286899186.6 uoekk True
'''
