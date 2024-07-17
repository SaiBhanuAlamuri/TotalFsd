var data=[

  
    {
        name:"Divya Vetsa",
        rollno:"22A91A5566",
        gender:"female",
        delete:"remove",
    }
    ,
    {
        name:"Ramya Desu",
        rollno:"22A91A05H3",
        gender:"female",
        delete:"remove",
    }
    ,
    {
        name:"Puspendra Birajee",
        rollno:"22A91A05J7",
        gender:"male",
        delete:"remove",
    },
    {
        name:"Sanjit Das",
        rollno:"22A91A05K1",
        gender:"male",
        delete:"remove",
    }
    ,
    {
        name:"Joshna Ganja",
        rollno:"22A91A05H6",
        gender:"female",
        delete:"remove",
    },
    
]


var button=document.getElementsByClassName("b1")[0]
button.style.padding="10px";
button.style.position = "absolute"
button.style.top="450px"
button.style.width="200px"
// button.style.backgroundColor="blue";
button.style.color="white"
button.style.fontSize="26px";








var x = document.getElementsByClassName("mydiv")[0];
x.style.display="none";
x.style.position="absolute";
x.style.top="100px";





function clicking()
{
    if( x.style.display!="block")
    {

    
    x.style.display="block";
    }
    else{
        console.log("Need To Do Task");
        var obj={
        name:window.prompt("Enter Name"),
        rollno:window.prompt("Enter RollNo"),
        gender:window.prompt("Enter gender"),
        delete:window.prompt("Enter Delete"),
        }
        data.push(obj)
        var row= `<tr>
            <td>${obj.name}</td>
            <td>${obj.rollno}</td>
            <td>${obj.gender}</td>
            <td>${obj.delete}</td>
        </tr>`
        x.innerHTML += row;
       
        var cells=x.getElementsByTagName("td");
        var len=cells.length;
        for(var i=0;i<len;i++)
        {
            cells[i].onclick=function()
            {
                if(this.hasAttribute('data-clicked'))
                {
                    return;
                }
                this.setAttribute('data-clicked','yes')
                this.setAttribute('data-text', this.innerHTML);
        
        
                 var input=document.createElement("input");
                 input.setAttribute("type","text")

                 input.value=this.innerHTML  //In Order To Just check changes
               
                 input.style.fontFamily="inherit";
                input.style.fonSize="50px";
                input.style.fontWeight="bold"
                input.style.textAlign="inherit";
                input.style.backgroundColor="aqua"
                input.style.color="black"
                input.style.width="150px"
                
        
                this.innerHTML='';
                this.style.cssText='padding:0px 0px';
                this.append(input);
                this.firstElementChild.select();
            
        
                input.onkeypress=function()
                {
                    if(event.keyCode == 13)
                    {
                        this.blur();
                    }
        
                }
        
        
                
                input.onblur=function()
                {
                    var td=input.parentElement;
                    var orignal=td.getAttribute('data-text')
                    var current=this.value;
                    if(orignal!=current)
                    {
                        td.removeAttribute('data-clicked');
                        td.removeAttribute('data-text');
                        td.innerHTML=current;
                       
                        console.log(orignal + "is changed to" + current);
                    }
                    else{
                        td.removeAttribute('data-clicked');
                        td.removeAttribute('data-text');
                        td.innerHTML=orignal;
                      
                        console.log("No Changes");
                    }
                }
                
        
                // event.preventDefault();
        
            }
        }

       //Deleting
        for(var i=1;i<x.rows.length;i++)
            {
                x.rows[i].cells[3].onclick = function(){
            
                
                
                    var index=this.parentElement.rowIndex;
                    x.deleteRow(index);
                }
                
            }
        
        
    }
    
}



//First Row
var row =document.createElement("tr")
x.appendChild(row);
//Id of first row
var first_id = document.getElementsByTagName("tr")[0];

// Adding First Heading
var first_head=document.createElement("th")
first_id.appendChild(first_head)
first_head.innerHTML="Name"

//Second Heading 
var second_head=document.createElement("th")
first_id.appendChild(second_head)
second_head.innerHTML="RollNo"

//Third Heading 
var third_head=document.createElement("th")
first_id.appendChild(third_head)
third_head.innerHTML="Gender"

//Fourth Heading 
var fourth_head=document.createElement("th")
first_id.appendChild(fourth_head)
fourth_head.innerHTML="Delete"





// For Entering Data
dataEntering(data)
function dataEntering(data)
{
    for(var i=0;i<data.length;i++)
    {
       var row= `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].rollno}</td>
            <td>${data[i].gender}</td>
            <td>${data[i].delete}</td>
        </tr>`
        x.innerHTML += row;
    }
    
}




//Making The Table Editable

// var cells=x.getElementsByTagName("td");
// var len=cells.length;
// for(var i=0;i<len;i++)
// {
//     cells[i].onclick=function()
//     {
//         if(this.hasAttribute('data-clicked'))
//         {
//             return;
//         }
//         this.setAttribute('data-clicked','yes')
//         this.setAttribute('data-text', this.innerHTML);


//          var input=document.createElement("input");
//          input.setAttribute("type","text")
//          input.value=this.innerHTML;
         
//          input.style.fontFamily="inherit";
//         input.style.fonSize="inherit";
//         input.style.textAlign="inherit";
//         input.style.backgroundColor="green"
//         input.style.color="white"
//         input.style.width="150px"

//         this.innerHTML='';
//         this.style.cssText='padding:0px 0px';
//         this.append(input);
//         this.firstElementChild.select();//To select our element when it is selected
    

//         input.onkeypress=function()
//         {
//             if(event.keyCode == 13)
//             {
//                 this.blur();
//             }

//         }


        
//         input.onblur=function()
//         {
//             var td=input.parentElement;
//             var orignal=input.parentElement.getAttribute('data-text')
//             var current=this.value;
//             if(orignal!=current)
//             {
//                 td.removeAttribute('data-clicked');
//                 td.removeAttribute('data-text');
//                 td.innerHTML=current;
//                 // td.style.cssText='padding:5px';
//                 console.log(orignal+"is changed to"+current);
//             }
//             else{
//                 td.removeAttribute('data-clicked');
//                 td.removeAttribute('data-text');
//                 td.innerHTML=orignal;
//                 // td.style.cssText='padding:5px';
//                 console.log("No Changes");
//             }
//         }
        

//         // event.preventDefault();

//     }
// }

//Deleting

// for(var i=1;i<x.rows.length;i++)
// {
//     x.rows[i].cells[3].onclick = function(){

    
    
//         var index=this.parentElement.rowIndex;
//         x.deleteRow(index);
//     }
    
// }

