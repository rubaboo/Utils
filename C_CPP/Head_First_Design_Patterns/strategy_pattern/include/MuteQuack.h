#ifndef MUTE_QUACK_H
#define MUTE_QUACK_H

#include "QuackBehavior.h"

class MuteQuack : public QuackBehavior {
public:
    virtual string quack()
    {
        return "mute quack";
    }
};

#endif
