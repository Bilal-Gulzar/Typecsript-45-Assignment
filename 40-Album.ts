// Exercise No : 40 Album.

import { constants } from "buffer";
import { ALL } from "dns";

//make function
function make_album(Artist:string, Tittle:string, Tracks?:Number) {
  
  
  const dectionary: {Artist:string, Tittle:string,Tracks?:Number} = {

    Artist: Artist.charAt(0).toUpperCase() + Artist.slice(1),
    Tittle:Tittle.charAt(0).toUpperCase() +Tittle.slice(1)

  }

    if(Tracks !== undefined){

       dectionary.Tracks = Tracks
    
    }


  return dectionary;
}

//const a = make_album()
const a = make_album("metallica", "ride the lightning");
console.log(a);

console.log("\n");

const b = make_album('beethoven', 'ninth symphony')
console.log(b);

console.log("\n");

const c = make_album("willie nelson", "red-headed stranger", 16);
console.log(c);