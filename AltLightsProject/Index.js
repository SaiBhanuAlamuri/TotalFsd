var x1=document.getElementsByTagName("span")[0];
var x2=document.getElementsByTagName("span")[1];
var x3=document.getElementsByTagName("span")[2];
var x4=document.getElementsByTagName("span")[3];
var x5=document.getElementsByTagName("span")[4];
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)
console.log(x5)


function fun()
{
  x1.style.display="block";
}
function fun_a()
{
    x1.style.display="none";

}
function fun1()
{
    x2.style.display="block";
}
function fun_1()
{
    x2.style.display="none";
    
}
function fun2()
{
    x3.style.display="block";
}
function fun_2()
{
    x3.style.display="none";
}


function fun3()
{
    x4.style.display="block";
}
function fun_3()
{
    x4.style.display="none";
}
function fun4()
{
    x5.style.display="block";
}
function fun_4()
{
    x5.style.display="none";
}

/* For Nav Bar 3 Element*/
// var icon1=document.getElementsByClassName("fa-solid fa-bars")[0];
// var select_id=document.getElementsByClassName("selectclass")[0];
// function funi(data)
// {
//     var y1=document.getElementsByClassName(data)[0];
//     y1.style.width="100px";
// }

const funi=(y)=>{
    let x = document.getElementsByClassName(y)[0];
    x.style.display='flex'
}
const funii=(z)=>{
    let x = document.getElementsByClassName(z)[0];
    x.style.display='none'
}

