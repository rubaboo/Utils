# coding=utf-8
import sys
import re
import os
import requests

if __name__ == '__main__':
    s = requests.session()
    s.get("http://www.isclab.org/script2/2013/script2/")
    r = s.get("http://www.isclab.org/script2/2013/static/validate.png")
    with open("captcha.png", "wb") as captcha:
        for chunk in r.iter_content():
            captcha.write(chunk)
            print 'ok'
    c = raw_input()
    r = s.post("http://www.isclab.org/script2/2013/script2/", {'keywords': c,'op': 'submit'})
    print r.text
