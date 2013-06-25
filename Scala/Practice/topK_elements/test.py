import sys
import re
import os
import subprocess
from random import randint

CASES = [
    [0, 1, 2, 3],
    [1, 1]
]

nr = 1


def test(case):
    global nr
    process = subprocess.Popen(['scala', 'topK'],
                               shell=False,
                               stdin=subprocess.PIPE,
                               stdout=subprocess.PIPE)
    ans = process.communicate(' '.join(map(str, case)))[0]
    ans = set(map(int, ans.split()))

    k = case[0]
    l = case[1::]

    print k,l
    right = set(sorted(l)[0:k])

    if right == ans:
        print "Case %d passed!" % nr
        nr += 1
    else:
        print "Case %d error!" % nr
        print "input -> ", case
        print "output -> ", ans
        print "ans -> ", right
        sys.exit(0)


if __name__ == '__main__':
    for case in CASES:
        test(case)
    for i in xrange(100):
        n = randint(1, 3000)
        k = randint(1, n)
        l = [randint(1, 10000) for i in xrange(n)]
        test([k] + l)
