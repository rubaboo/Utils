#!/usr/bin/env python
# coding=utf-8
import sys
import re
import os
import MySQLdb
import cgi
import Template  # My own template module

'''
mysql> select * from user_table;
+----+------+----------+
| id | user | password |
+----+------+----------+
|  1 | user | password |
+----+------+----------+
1 row in set (0.00 sec)
'''


if __name__ == '__main__':
    conn = MySQLdb.connect(host='localhost',
                           port=3306,
                           user='bad_dba',
                           passwd='123456',
                           db='buggy_db')

    cursor = conn.cursor()

    form = cgi.FieldStorage()
    user = form['user'].value
    password = form['password'].value

    cursor.execute(
        "SELECT * FROM `user_table` WHERE `user`='%s' and `password`='%s'" % (user, password))
    record = cursor.fetchone()

    if record:
        print Template.load('login_success.html')
    else:
        print Template.load('login_failed.html')
