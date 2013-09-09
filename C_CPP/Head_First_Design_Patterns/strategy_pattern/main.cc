#include <iostream>

#include "MullardDuck.h"
#include "RocketDuck.h"

using namespace std;

#define print(x) cout<<x<<endl
#define input(x) cin>>x

int main()
{
    MullardDuck mullard_duck;

    print(mullard_duck.perform_fly());
    print(mullard_duck.perform_quack());

    /*------------------------------*/

    RocketDuck rocket_duck;

    print(rocket_duck.perform_fly());
    print(rocket_duck.perform_quack());

    return 0;
}

