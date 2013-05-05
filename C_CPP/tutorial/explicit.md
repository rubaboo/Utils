## Explicit in C++

``explicit`` 用来修饰C++类的构造函数，用来避免隐式转换带来的潜在错误。

### Example

```CPP
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <string>
#include <iostream>
#include <algorithm>

using namespace std;

#define print(x) cout<<x<<endl
#define input(x) cin>>x

class B
{
public:
    explicit B(int x)
    {
        print("B(int): "<<x);
    }
    explicit B(char x)
    {
        print("B(char): "<<x);
    }
    explicit B(const char *x)
    {
        print("B(char*): "<<x);
    }
    B(string x)
    {
        print("B(string): "<<x);
    }
private:
    B();
};


int main()
{

    B b0(12);// B(int): 12
    B b1('b');// B(char): b
    B b2("b");// B(char*): b
    B b3(string("b"));//B(string): b

    //B b4='b';//error: conversion from ‘char’ to non-scalar type ‘B’ requested
    //B b5="B";//error: conversion from ‘const char [2]’ to non-scalar type ‘B’ requested
    B b6=string("b");//B(string): b -- no warning or error

    return 0;
}

```

``explicit``只对隐式转换起作用，并不限制构造函数的行为。
    


