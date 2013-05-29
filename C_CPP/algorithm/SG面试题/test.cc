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

bool judge(const string& s,int a, int b)
{
    set<char> ss;
    for(int i=a;i<=b;i++)
    {
        ss.insert(s[i]);
    }
    return ss.size()<=2;
}

int main()
{
    string s;
    while(input(s))
    {
        int len = s.length();
        int ans = 0;
        for(int i=0;i<len;i++)
        {
            for(int j=i;j<len;j++)
            {
                if(judge(s,i,j)) ans = max(ans,j-i+1);
            }
        }
        print(ans);
    }
    return 0;
}
