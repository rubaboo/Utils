# coding=utf-8
import sys
import re
import os
import random

SEQ = 100000
CASE = 10240

if __name__ == '__main__':
    seq = [0]
    res = []
    for i in xrange(SEQ):
        res.append((i+1, ''.join(map(lambda x: chr(ord('a') + x), seq))))
        seq[0] += 1
        l = len(seq)
        for j, x in enumerate(seq):
            if x >= 4:
                seq[j] = 0
                if j + 1 >= l:
                    seq = [0] + seq
                else:
                    seq[j + 1] += 1
    with open("input.txt", "w") as input_file:
        with open("output.txt", "w") as output_file:
            for i in xrange(CASE):
                a, b = random.choice(res)
                input_file.write("%s\n" % b)
                output_file.write("%d\n" % a)
