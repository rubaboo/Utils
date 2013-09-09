#ifndef FLY_WITH_ROCKET
#define FLY_WITH_ROCKET

#include "FlyBehavior.h"

class FlyWithRocket : public FlyBehavior {
public:
    virtual string fly()
    {
        return "fly with rocket";
    }
};

#endif
