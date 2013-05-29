#ifndef SINGLETON
#define SINGLETON

class CSingleton
{
public:
    static CSingleton* getInstance()
    {
        if(!uniqueInstance)
        {
            pthread_mutex_lock(&mutex);
            if(!uniqueInstance)
            {
                uniqueInstance = new CSingleton();
            }
            pthread_mutex_unlock(&mutex);
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
    CSingleton & operator = (const CSingleton&);
    static CSingleton* uniqueInstance;
    static pthread_mutex_t mutex;
};

CSingleton* CSingleton::uniqueInstance = NULL;
pthread_mutex_t CSingleton::mutex = PTHREAD_MUTEX_INITIALIZER;

#endif
