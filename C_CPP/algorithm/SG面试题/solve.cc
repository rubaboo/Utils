#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>
#include <iostream>
#include <algorithm>
#include <set>

using namespace std;

#define print(x) cout<<x<<endl
#define input(x) cin>>x

const int ALPHA = 26;

void init_set(set<int>& ss)
{
    ss.insert(0);
    for(int i=0;i<ALPHA;i++)
    {
        for(int j=0;j<ALPHA;j++)
        {
            ss.insert( (1<<i) | (1<<j) );
        }
    }
}

int solve(string s)
{
    int len = s.length();
    int alpha[ALPHA] = {0};
    set<int> ss;

    init_set(ss);
    int res = 0, ans = 0;
    for(int p=0,q=0; p<len && q<len; p++)
    {
        char x = s[p];
        alpha[x - 'a']++;
        res |= 1 << (x-'a');

        while(ss.find(res)==ss.end())
        {
            x = s[q++];
            alpha[x-'a']--;
            if(!alpha[x-'a']) res^=1 << (x-'a');
        }

        ans = max(ans, p-q+1);
    }
    return ans;
}

int main()
{
    string s;
    while(input(s))
    {
        print(solve(s));
    }
    return 0;
}
