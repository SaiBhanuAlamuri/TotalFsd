var care = new Promise(
    function(Success,Error)
    {
        var x=0;
        // Success("Bhanu You Got Success");
        // Error("Bhanu You Got Error");
        if(x>0)
        {
            Success("Bhanu You Got Success");

        }
        else{
            Error("Bhanu Got Rejected");
        }

    }
)
console.log(care);
//To know whether Work is done or not we use then ,It take two parameteres -->Success -->First Function ,Rejected -->Second Function
care.then(function(value)
{
    console.log(value)

},function(error)
{
    console.log(error)

})


// chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) {
//     // setTimeout to simulate any callback (even from storage.sync)
//     setTimeout(function() {
//         sendResponse({status: true});
//     }, 1);
//     return true;  // uncomment this line to fix error
// });