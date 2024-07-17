function fun(data)
{
    var x=document.getElementsByClassName(data)[0];
    if(x.style.transform == 'rotateY(0deg)')
    {
        x.style.transform = 'rotateY(180deg)';
    }
    else 
    {
        x.style.transform = 'rotateY(0deg)';
    }
   
}