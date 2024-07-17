var obj={
    name:"",
    roll:"",
    coll:"",
    father:"",
    mother:"",
    phone:"",
    Course:"",
    address:"",
    datebirth:"",
    Gender:"",
    certifications:"",
    btech1:"",
    btech2:"",
    btech3:"",
    
    ssc1:"",
    ssc2:"",
    ssc3:"",
    inter1:"",
    inter2:"",
    inter3:"",
    hobby:"",
}

var btech={
    btech1:"",
    btech2:"",
    btech3:"",
}
var ssc={
    ssc1:"",
    ssc2:"",
    ssc3:"",
}
var inter=
{
    inter1:"",
    inter2:"",
    inter3:"",
}
function fun(event)
{
    if(event.target.name=="name")
    {
      
        obj.name=event.target.value;
    }

    if(event.target.name=="roll")
        {
            obj.roll=event.target.value;
        }


    if(event.target.name=="coll")
     {
                obj.coll=event.target.value;
     }



     if(event.target.name=="father")
        {
                   obj.father=event.target.value;
        }



    if(event.target.name=="mother")
            {
                       obj.mother=event.target.value;
            }
    
   if(event.target.name=="phone")
                {
                           obj.phone=event.target.value;
                }


       if(event.target.name=="Course")
                    {
                               obj.Course=event.target.value;
                    }
       if(event.target.name=="address")
                        {
                                   obj.address=event.target.value;
                        }
        if(event.target.name=="datebirth")
                            {
                                       obj.datebirth=event.target.value;
                            }
        if(event.target.name=="Gender")
                                {
                                           obj.Gender=event.target.value;
                                }
        if(event.target.name=="certifications")
                                    {
                                               obj.certifications=event.target.value;
                                    }
       
        if(event.target.name=="ssc1")
        {
            obj.ssc1=event.target.value;
        }
        if(event.target.name=="ssc2")
            {
                obj.ssc2=event.target.value;
            }
        if(event.target.name=="ssc3")
                {
                    obj.ssc3=event.target.value;
                }
              
    if(event.target.name=="inter1")
                    {
                        obj.inter1=event.target.value;
                    }
    if(event.target.name=="inter2")
                        {
                            obj.inter2=event.target.value;
                        }
    if(event.target.name=="inter3")
                            {
                                obj.inter3=event.target.value;
                            }

   if(event.target.name=="btech1")
                                {
                                    obj.btech1=event.target.value;
                                }
  if(event.target.name=="btech2")
                                    {
                                        obj.btech2=event.target.value;
                                    }
  if(event.target.name=="btech3")
                                   {
                                            obj.btech3=event.target.value;
                                   }
   if(event.target.name=="hobby")
                                    {
                                             obj.hobby=event.target.value;
                                    }
                            
                
                          
                      
      


}
function fun2(event)
{
    event.preventDefault();
    console.log(obj);
}

