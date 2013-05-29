#!/usr/bin/env python
# coding=utf-8
import sys
import re
import os

_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'template')


def load(tname, args={}):
    with open(os.path.join(_PATH, tname)) as t:
        return t.read() % args
