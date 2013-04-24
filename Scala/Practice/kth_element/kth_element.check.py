#coding=utf-8
import sys,re,os
from random import randint

if __name__ == '__main__':
	with open("input.txt","w") as input_file:
		with open("out.txt","w") as output_file:
			for i in xrange(200):
				n = randint(10,1000)
				A = []
				for i in xrange(n):
					x = randint(1,1<<29)
					input_file.write("%d " % x)
					A.append(x)
				input_file.write("\n")
				k = randint(1,n)
				input_file.write("%d\n" % k)
				output_file.write("%d\n" % sorted(A)[k-1])

