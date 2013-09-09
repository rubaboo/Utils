#ifndef FLY_NO_WAY_H
#define FLY_NO_WAY_H

#include "FlyBehavior.h"

class FlyNoWay : public FlyBehavior {
public:
    virtual string fly() 
    {
        return "fly no way";
    }
};

#endif
