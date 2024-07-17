import { stud } from "./JSB.js";

/* For Each

stud.forEach((item) =>
    {

        if(item.roll==1256)
            {
                item.name="Sai bhanu Alamuri";
            }
    }
)
    console.log(stud);



*/



/*  Map

stud.map(ele =>
    {
        console.log(ele);
        console.log(`name:${ele.name}`);
        console.log(`roll:${ele.roll}`);
        console.log(`coll:${ele.col}`);
    }
)

*/





/* Functions to generate combination of password */

//2nd Approach


const generate = (len) =>{

   var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
   var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
   var num=['1','2','3','4','5','6','7','8','9','0']
   var special=['@','#','$','%','^','&','*','(',')','-','=','{','}','/',']','[']
   var pass=[lower,upper,num,special];
   var str='';

   for(let i=1;i<=len;i++)
   {
        var index1= pass[Math.floor(Math.random()*pass.length)];
        str+=index1[Math.floor(Math.random() *index1.length)];


   }
  return str;
}

// var n=readLine();
var n=prompt("Enter The Length of The Password");
console.log(generate(parseInt(n)));





/* First Approach
const generate = (len) =>{

    let  total= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let password=' ';

    for (let i = 1; i <= len; i++) {
        

        // console.log(Math.random()* total.length);

        let index = Math.floor(Math.random() * total.length);
        password += total.charAt(index)

    }

    return password;
}

console.log(generate(5));

*/