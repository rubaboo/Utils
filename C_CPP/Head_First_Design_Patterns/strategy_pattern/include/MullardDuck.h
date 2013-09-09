#ifndef MULLARD_DUCK_H
#define MULLARD_DUCK_H

#include "Quack.h"
#include "FlyWithWings.h"
#include "Duck.h"


class MullardDuck : public Duck {
public:
    MullardDuck() : Duck()
    {
        fly_behavior = new FlyWithWings();
        quack_behavior = new Quack();
    }
};


#endif
