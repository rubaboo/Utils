import random

if __name__ == '__main__':
    print 'a'
    print 'aaabbaaa'
    print 'ababababababababababcbabababababab'
    print 'aaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaa'

    alpha = [chr(ord('a')+i) for i in xrange(26)]

    for i in xrange(50):
        s = ""
        n = random.randint(1,300)
        for j in xrange(n):
            c = random.choice(alpha)
            v = random.randint(1,5)
            s += c * v

        print s
