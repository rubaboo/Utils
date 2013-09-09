#ifndef SQUEAK_H
#define SQUEAK_H

#include "QuackBehavior.h"

class Squeak : public QuackBehavior {
public:
    virtual string quack()
    {
        return "squeak";
    }
};

#endif
