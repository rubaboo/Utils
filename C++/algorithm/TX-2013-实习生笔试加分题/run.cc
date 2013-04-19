#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

#define print(x) cout<<x<<endl
#define input(x) cin>>x

const int SIZE = 1024;

int a[SIZE],b[SIZE],n;

int main()
{
    int T;
    input(T);
    while(T--)
    {
        input(n);
        for(int i=0;i<n;i++)
        {
            input(a[i]);
            b[i]=1;
        }

        for(int i=1;i<n;i++)
        {
            b[i]=b[i-1]*a[i-1];
        }
        for(int i=n-1;i>0;i--)
        {
            b[i]=b[i]*b[0];
            b[0]*=a[i];
        }

        for(int i=0;i<n;i++)
        {
            printf("%d ",b[i]);
        }
        puts("");
    }
    return 0;
}
