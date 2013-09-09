#ifndef DUCK_H
#define DUCK_H

#include "FlyBehavior.h"
#include "QuackBehavior.h"

class Duck {
public:
    string perform_fly()
    {
        return fly_behavior -> fly();
    }

    string perform_quack()
    {
        return quack_behavior -> quack();
    }

    ~Duck()
    {
        delete fly_behavior;
        delete quack_behavior;
    }
protected:
    Duck(): fly_behavior(NULL), quack_behavior(NULL) {}

    FlyBehavior* fly_behavior;
    QuackBehavior* quack_behavior;

};


#endif
