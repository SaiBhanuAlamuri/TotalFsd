var c=0;
var h=0;
var m=0;
var add,add1,add2;

function seconds(){
   
   c++;
   if(c==60)
   {
    c=0;
   }
   document.getElementsByClassName('seconds')[0].innerHTML=c;
}

function minutes()
{
    
    m++;
    if(m==60)
        {
            m=0;
        }
        document.getElementsByClassName('minutes')[0].innerHTML=m;

}
function hours()
{
    h++;
    if(h==12)
        {
            h=0;
        }
        document.getElementsByClassName('hours')[0].innerHTML=h;

}

function fun()
{
    
   add=setInterval(seconds,1000);
   add1=setInterval(minutes,60000);
   add2=setInterval(hours,3600000);
    
    
}


function fun2()
{
    document.getElementsByClassName("hours")[0].innerHTML=0;
    document.getElementsByClassName("minutes")[0].innerHTML=0;
    document.getElementsByClassName("seconds")[0].innerHTML=0;
    
    clearInterval(add);
    clearInterval(add1);
    clearInterval(add2);
    h=0;
    m=0;
    c=0;

}

function fun3()
{
   
    clearInterval(add);
    clearInterval(add1);
    clearInterval(add2);
}
