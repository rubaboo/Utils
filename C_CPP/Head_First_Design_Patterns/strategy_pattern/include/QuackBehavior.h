#ifndef QUACK_BEHAVIOR_H
#define QUACK_BEHAVIOR_H

#include <iostream>
#include <string>

using std::string;

class QuackBehavior {
public:
    virtual string quack() = 0;
};

#endif
