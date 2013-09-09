#ifndef QUACK_H
#define QUACK_H

#include "QuackBehavior.h"

class Quack : public QuackBehavior {
public:
    virtual string quack()
    {
        return "quack";
    }
};


#endif
