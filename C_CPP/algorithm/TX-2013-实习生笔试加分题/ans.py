#coding=utf-8
import sys,re,os

if __name__=='__main__':
    T = int(raw_input())
    for cas in xrange(T):
        n = int(raw_input())
        l = map(int, raw_input().split())
        mul = reduce(lambda x,y: x*y, l, 1)
        for i in xrange(n):
            print mul/l[i],
        print ''

