from CaseContainer import Case, CaseContainer

class MetaCase(type):
    def __init__(cls, name, bases, attrs):
        if name == 'BaseCase':
            return
        
        case = Case(name, attrs)
        CaseContainer.append(case)

class BaseCase(object):
    __metaclass__ = MetaCase
    pass

def run_all_test():
    for case in CaseContainer.cases:
        case.run()
