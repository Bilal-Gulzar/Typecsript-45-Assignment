//Exercise No: 30 Hello Admin

const userName: string[] = ["Osama", "Abdulraffay", "Admin", "Sajid", "Umer", "Ali"];


for(let i = 0; i<userName.length; i++){

if(userName[i] === "Admin"){

    console.log(`Hello ${userName[i]}, would you like to see a status report?`);
}

else{

    console.log(`Hello ${userName[i]},thank you for logging in again.`);
}


}