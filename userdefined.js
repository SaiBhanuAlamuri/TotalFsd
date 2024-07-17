/* 
Rising own error using throw

*/

try{
    var x=window.prompt("Enter the name");
    if(x === "rama")
        {
            throw{name:"rama" , message:"jai shri rama"};  //This is a user-defined error; We can throw error depending on our own interest;
        }
        console.log(x);
}
catch(error)
{
    console.log(error);
}
finally
{
    console.log("No one can stop Hinduism");
}