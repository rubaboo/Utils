#ifndef FLY_WITH_WINGS_H
#define FLY_WITH_WINGS_H

#include "FlyBehavior.h"

class FlyWithWings : public FlyBehavior {
public:
    virtual string fly() 
    {
        return "fly with wings";
    }
};

#endif
