// Exercise No : 14 Guest list 

let guestlist: string[] =["Osama", "Daniyal", "Taha"];

/*for(let i=0; i<guestlist.length; i++){

    console.log( "Dear Mr. "  + guestlist[i] + "\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n " );
}*/

// Exercise No : 15 Changing guest list

let absent_guest: string = guestlist[0]

guestlist[0] =  "Kamran khan tessori";

/*
for(let i=0; i<guestlist.length; i++){

    console.log( "Dear Mr. "  + guestlist[i] + "\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n " );
}
console.log(absent_guest + " is not coming to party\n\n");*/

// Exercise No : 16 More guests 

guestlist.unshift("Hassan");
guestlist.splice(2,0, "Hussain");
guestlist.push("Kashan");

for(let i=0; i<guestlist.length; i++){

    console.log( "Dear Mr. "  + guestlist[i] + "\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n " );
};
console.log("I found a bigger dinner table  more space was available that's why i invited three new friends!\n\n");

// Exercise No: 17 shrinking guest list 

console.log(" sorry Guys, I can invite only two people for dinner\n ");

// removing people from list

while ( guestlist.length>2 ){
    
console.log("Sorry i can not invite you to dinner Mr " + guestlist.pop()+"\n");
}

// sending message to two people who are still invited to dinner 

for (let i=0; i<guestlist.length; i++){

    console.log(guestlist[i] +" you're still  invited to dinner\n\n" );
}
let remove = guestlist.splice(0,2);

// checking empty list to make sure 
console.log(guestlist);
