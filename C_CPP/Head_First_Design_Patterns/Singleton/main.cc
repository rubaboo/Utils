#include "Singleton.hxx"

int main()
{
    CSingleton* ins = CSingleton::getInstance();

    print(ins->getVal());
    ins->fill(10);
    print(ins->getVal());
    
    return 0;
}
