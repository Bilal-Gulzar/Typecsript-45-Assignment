//Exercise No : checking UserNames

let current_Users: string[] = ["Wahab", "Huzaifa", "Farhan", "Atif", "Zeeshan"];

let new_Users: string[] = ["Saad", "Uzair", "Huzaifa", "Hamza", "Farhan"];

// Conveting Current UserName into lowerCase

for(let i = 0; i<current_Users.length; i++){

   current_Users[i] = current_Users[i].toLocaleLowerCase()

}
// Now Checking whether Username has already used :

for(let i = 0; i<new_Users.length; i++){

    if(current_Users.includes(new_Users[i].toLocaleLowerCase())){
 
        console.log("You need to enter a new username");
    }

    else{

        console.log("Username is available");
    }
}
