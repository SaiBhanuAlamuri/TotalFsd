
/*Try Where u want to try experimenting risky code"

err.name -->reference error
err.message-->the message

The Datatype of error is object
err
{
name:refernce;
message:x is not defined
}

*/

try{
    {
    var x=0;
}
console.log(x);
}
catch(err)
{
    console.log(err.message);
}
finally
{
    console.log("I Will Execute Irrespective of Error,Unstoppable");
}