#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
const SIZE = 1024
var arr = new Array(SIZE);

for(var i = 0; i < SIZE; i++)
{
    arr[i] = true;
}

for(var i = 2; i < SIZE; i++)
{
    if(arr[i])
    {
        for(var j = 2; i * j < SIZE; j++)
        {
            arr[i*j] = false;
        }
    }
}

var nr = 0;
fs.writeFileSync(outfile, '');
for(var i = 2; i <= SIZE; i++)
{
    if(arr[i])
    {
        if(i==2) 
        {
            fs.appendFileSync(outfile, i);
        }
        else
        {
            fs.appendFileSync(outfile, ',' + i);
        }
        nr++;
        if(nr == 100) break;
    }
}



