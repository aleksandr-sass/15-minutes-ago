module.exports=(arr)=>
{
    let minusStr='';
    let l=arr.length;
    for(let i=0;i<l;i++)
    {
        if(arr[i]<1000) minusStr+='0';
        if(arr[i]<100) minusStr+='0';
        if(arr[i]<10) minusStr+='0';
        minusStr+=arr[i].toString();
        minusStr+=" ";
    }
    return minusStr.trim();
}