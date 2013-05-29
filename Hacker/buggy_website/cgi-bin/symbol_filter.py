#!/usr/bin/env python
# coding=utf-8
import sys
import re
import os
import MySQLdb
import cgi
import Template  # My own template module

if __name__ == '__main__':
    form = cgi.FieldStorage()
    symbols = form['symbols'].value
    symbols = MySQLdb.escape_string(symbols)
    print Template.load("symbol_filter.html",{'safe-symbol': symbols})