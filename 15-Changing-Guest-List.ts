// Exerecise No : 14 Guest list
let guestlist: string[] =["Osama", "Daniyal", "Taha"];

for(let i=0; i<guestlist.length; i++){

    console.log( "Dear Mr. "  + guestlist[i] + "\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n " );
}
// Exercise No : 15 changing guest list

let absent_guest: string = guestlist[0]

guestlist[0] =  "Kamran khan tessori";


for(let i=0; i<guestlist.length; i++){

    console.log( "Dear Mr. "  + guestlist[i] + "\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n " );
}
console.log(absent_guest + " is not coming to party");
