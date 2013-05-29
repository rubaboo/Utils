#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <algorithm>
#include <pthread.h>

#include "Singleton.hxx"

using namespace std;

#define print(x) cout<<x<<endl
#define input(x) cin>>x

int main()
{
    CSingleton* ins = CSingleton::getInstance();

    print(ins->getVal());
    ins->fill(10);
    print(ins->getVal());
    
    return 0;
}
