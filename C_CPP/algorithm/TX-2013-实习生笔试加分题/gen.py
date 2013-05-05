#coding=utf-8
import sys,re,os
from random import randint

CASE = 1000

if __name__ == '__main__':
    print CASE
    for cas in xrange(CASE):
        n = randint(3,10)
        print n
        for i in xrange(n):
            print randint(1,10),
        print ''
