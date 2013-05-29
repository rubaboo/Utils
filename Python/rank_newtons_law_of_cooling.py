# coding=utf-8
import sys
import re
import os
import math

rank_val = [100000, 80000, 60000, 40000, 20000]


def f(x, delta):
    return x * math.exp(-1. / 24)


for rank in rank_val:
    print '-' * 80
    for i in xrange(30):
        if rank > 19000:
            rank = int(max(f(rank, i + 1), 19001))
            print rank
        elif rank < 19000:
            print '*', rank
