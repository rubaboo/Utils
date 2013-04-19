#! /usr/bin/bash

echo "gen test data..."
python gen.py > input.txt
echo "calc answer..."
python ans.py < input.txt > ans.txt
echo "compile scala..."
scalac run.scala
echo "run scala program"
scala run < input.txt > out.scala.txt
echo "compile cc..."
g++ -Wall -g run.cc -o run
echo "run cc..."
./run < input.txt > out.cc.txt
echo "judging scala"
DIFF=$(diff ans.txt out.scala.txt)
if [[ "$DIFF" != "" ]]
then
    echo "failed..."
else
    echo "ok!"
fi

echo "judging cc"
DIFF=$(diff ans.txt out.cc.txt)
if [[ "$DIFF" != "" ]]
then
    echo "failed..."
else
    echo "ok!"
fi

echo "clean"
rm *.class
rm *.txt
rm run

