module.exports=(arr)=>
{
    let minusStr='';
    let l=arr.length;
    for(let i=0;i<l;i++)
    {
        minusStr+=arr[i].toString();
        minusStr+=" ";
    }
    return minusStr.trim();
}