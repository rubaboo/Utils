#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>

#define SIZE 10
#define COUNT 1000

int cnt = 0;
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

void* counter(void *x)
{
    int i;
    for(i=0;i<COUNT;i++)
    {
        pthread_mutex_lock(&mutex);
        cnt++;
        pthread_mutex_unlock(&mutex);
    }
}

int main()
{
    int i, err;
    int* status[SIZE];
    pthread_t tid[SIZE];
    
    for(i=0;i<SIZE;i++)
    {
        err = pthread_create(&tid[i], NULL, counter, NULL);
    }
    
    for(i=0;i<SIZE;i++)
    {
        err = pthread_join(tid[i], (void **)&status[i]);
    }
    printf("%d\n", cnt);
    return 0;
}
    
