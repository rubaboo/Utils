class CaseContainer(object):
    cases = []
    @classmethod
    def append(self, case):
        self.cases.append(case)

class Case(object):
    def __init__(self, name, attrs):
        self.name = name
        self.in_data = attrs.get('INPUT', None)
        self.out_data = attrs.get('OUTPUT', None)
        self.func = attrs.get('FUNC', None)

        assert(self.in_data)
        assert(self.out_data)
        assert(self.func)
        assert(len(self.in_data) == len(self.out_data))

    def run(self):
        print 'running case: %s ...' % self.name
        data_pair = zip(self.in_data, self.out_data)

        cnt = 0
        ok = 0
        for data_in, data_out in data_pair:
            res = self.func(**data_in)
            cnt += 1
            if data_out == res:
                ok += 1
                print '[PASS %d]...' % cnt
            else:
                print '[FAILED %d]...' % cnt
                print 'INPUT:', repr(data_in)
                print 'OUTPUT:', repr(res)
                print 'EXPECT:', repr(data_out)
        print 'finish case: %s (%d / %d) ...' % (self.name, ok, cnt)
        print '-' * 20

