#! /usr/bin/bash
echo "generating test data..."
python kth_element.check.py
echo "compile kth_element.scala"
scalac kth_element.scala
echo "run scala code..."
scala kth_element <input.txt 1>ans.txt 2>/dev/null
echo "judging..."
DIFF=$(diff ans.txt out.txt)
if [[ "$DIFF" !=  "" ]]
then
    echo "Failed..."
else
    echo "OK!"
    echo "cleaning..."
    rm *.txt
    rm *.class
fi

