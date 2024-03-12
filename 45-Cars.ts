// //Exercise No : 45 Cars

interface carinfo {

    manufacture: string,
    model:string,
    [key:string]: any;
}



function car(
  manufacture: string, model: string, option: Record<string,any>):
  
  //    """Make a Object representing a car.""" 
  carinfo{
           return{ manufacture,   
                    model,
                    ...option
            


           }

  }

    
//invoke function
 const a: object = car("Toyota","Land Crusier V8",{Color:"black", year: "2018"} )

console.log(a);
