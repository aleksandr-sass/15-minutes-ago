const fs=require('fs');
const minusToString =require('./src/minusToString.js');
const minus=require('./src/minus.js');
const parcer=require('./src/parcer.js');
let minusArray=minus(parcer);
let minusStr=minusToString(minusArray);
fs.writeFileSync('./output.txt',minusStr);