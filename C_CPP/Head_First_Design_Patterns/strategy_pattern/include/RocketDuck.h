#ifndef ROCKET_DUCK_H
#define ROCKET_DUCK_H

#include "Squeak.h"
#include "FlyWithRocket.h"
#include "Duck.h"

class RocketDuck : public Duck {
public:
    RocketDuck() : Duck() 
    {
        fly_behavior = new FlyWithRocket();
        quack_behavior = new Squeak();
    }
};

#endif
