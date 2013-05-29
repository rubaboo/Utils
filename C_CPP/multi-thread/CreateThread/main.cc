#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <algorithm>
#include <pthread.h>

using namespace std;

#define print(x) cout<<x<<endl
#define input(x) cin>>x

const int SIZE = 5;

void * hello_world(void *x)
{
    printf("Hello World %lld\n", (long long)pthread_self());
}

int main()
{
    int err;
    pthread_t tid[SIZE];
    int* status[SIZE];

    for(int i=0;i<SIZE;i++)
    {
        err = pthread_create(&tid[i], NULL, hello_world, NULL);
    }

    for(int i=0;i<SIZE;i++)
    {
        err = pthread_join(tid[i], (void **)&status[i]);
    }

    return 0;
}