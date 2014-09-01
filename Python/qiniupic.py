#!/usr/bin/python
import sys
import md5
import datetime

import qiniu.conf
import qiniu.io
import qiniu.rs

qiniu.conf.ACCESS_KEY = 'ACCESS_KEY'
qiniu.conf.SECRET_KEY = 'SECRET_KEY'

BUCKET_NAME = 'BUCKET_NAME'
BASEURL = 'http://BASEURL.qiniudn.com/'

def get_uptoken():
    policy = qiniu.rs.PutPolicy(BUCKET_NAME)
    uptoken = policy.token()
    return uptoken

def get_md5(fn):
    return md5.new(fn).hexdigest()

def print_usage():
    print 'USAGE: ./qiniupic pic_file_path'

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print_usage()
        sys.exit(0)

    uptoken = get_uptoken()

    local_file = sys.argv[1]
    key = get_md5(local_file)

    ret, err = qiniu.io.put_file(uptoken, key, local_file)

    if err is None:
        print BASEURL + ret['key']
    else:
        print >> sys.stderr, err
    

