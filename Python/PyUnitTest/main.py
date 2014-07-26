import PyUnitTest
from PyUnitTest import BaseCase

def func1(a, b):
    return a + b

def func2(a, b):
    return a * b


class TestFunc1(BaseCase):
    FUNC = func1
    INPUT = [{'a': 1, 'b': 2},
             {'a': 2, 'b': 3},
             {'a': 3, 'b': 4}]
    OUTPUT = [3, 5, 8]

class TestFunc2(BaseCase):
    FUNC = func2
    INPUT = [{'a': 1, 'b': 2},
             {'a': 2, 'b': 3},
             {'a': 3, 'b': 4}]
    OUTPUT = [2, 8, 12]

if __name__ == '__main__':
    PyUnitTest.run_all_test()
