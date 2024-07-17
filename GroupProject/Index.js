
function fun1(data1,c)
{
    const x=document.getElementsByClassName(data1)[c];
    if(x.style.transform == 'rotateY(0deg)')
    {
        x.style.transform='rotateY(180deg)';
    }
    else{
        x.style.transform='rotateY(0deg)';

    }
    
}
// function fun2(data2)
// {
//     const x=document.getElementsByClassName(data2)[1];
//     if(x.style.transform == 'rotateY(0deg)')
//     {
//         x.style.transform='rotateY(180deg)';
//     }
//     else{
//         x.style.transform='rotateY(0deg)';

//     }
    
// }
// function fun3(data3)
// {
//     const x=document.getElementsByClassName(data3)[2];
//     if(x.style.transform == 'rotateY(0deg)')
//     {
//         x.style.transform='rotateY(180deg)';
//     }
//     else{
//         x.style.transform='rotateY(0deg)';

//     }
    
// }