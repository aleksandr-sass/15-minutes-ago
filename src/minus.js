const toMinutes=require('./toMinutes.js');
const toHours=require('./toHours.js');
const returnTime=require('./returnTime.js');

module.exports=(arr)=>
{
    let minusArr=[];
    let l=arr.length;
    for(let i=0;i<l;i++)
    {
        let minutes=toMinutes(arr[i]);
        let hours=toHours(arr[i]);
        minutes=(minutes>=15)?(minutes-15):(minutes+45);
        hours=(minutes>=45)?(hours-1):hours;
        hours=(hours==-1)?23:hours;
        minusArr.push(returnTime(hours,minutes));
    }
    return minusArr;
}