//Exercise No : 33 Ordinal Number

import { timingSafeEqual } from "crypto";
import { Z_FIXED } from "zlib";

let ordinalNumber: number[] =[1, 2, 3, 4, 5, 6, 7, 8, 9] ;

for(let i=0; i<ordinalNumber.length; i++){

     switch(ordinalNumber[i]){

        case 1 :
            console.log(`${ordinalNumber[i]}st Number.`);

            break;
        
        case 2 :
    console.log(`${ordinalNumber[i]}nd Number.`);
  
           break;

        case 3 :
        console.log(`${ordinalNumber[i]}rd Number.`); 

          break;

          default :
          console.log(`${ordinalNumber[i]}th Number.`)
     }

    
}                      