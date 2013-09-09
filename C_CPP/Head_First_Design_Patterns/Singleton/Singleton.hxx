#ifndef SINGLETON  
#define SINGLETON 

#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <algorithm>
#include <pthread.h>

using namespace std;

#define print(x) cout<<x<<endl
#define input(x) cin>>x

class CSpinlock
{
public:
    CSpinlock()
    {
        pthread_spin_init(&this->_lock, 0);
    }
    inline void lock()
    {
        pthread_spin_lock(&this->_lock);
    }
    inline void unlock()
    {
        pthread_spin_unlock(&this->_lock);
    }
private:
    CSpinlock(const CSpinlock&){}
    pthread_spinlock_t _lock;
};

class CSingleton  
{  
public:  
    static CSingleton* getInstance()  
    {  
        if(!uniqueInstance)  
        {  
            spinlock.lock();
            if(!uniqueInstance)  
            { 
                uniqueInstance = new CSingleton(); 
            } 
            spinlock.unlock();
        }  
        return uniqueInstance;  
    }  
    void fill(int x){ val += x; }  
    int getVal(){ return val; }  
private:  
    int val;  
    CSingleton()  
    {  
        val = 0; 
    }  
    CSingleton(const CSingleton&){}   
    static CSingleton * uniqueInstance;  
    static CSpinlock spinlock;
};  
      
CSingleton * CSingleton::uniqueInstance = NULL;  
CSpinlock CSingleton::spinlock;

#endif
