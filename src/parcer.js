const fs=require('fs');
let str=fs.readFileSync('./input.txt','utf-8');
let arrayParse=str.split(' ');
let l=arrayParse.length;
let arr=[];
for(let i=0;i<l;i++)
{
    arr.push(parseInt(arrayParse[i]));
}
module.exports=arr;