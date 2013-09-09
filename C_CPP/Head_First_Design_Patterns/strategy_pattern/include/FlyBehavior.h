#ifndef FLY_BEHAVIOR_H
#define FLY_BEHAVIOR_H

#include <iostream>
#include <string>

using std::string;

class FlyBehavior {
public:
    virtual string fly() = 0;
};

#endif
