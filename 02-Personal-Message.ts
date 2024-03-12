//EXercise No : 02 Personal message

let person_name : string = prompt("what is your name ?") || ''



if (person_name !== null && person_name !== ''){
    alert(`Hello ${person_name}, would you like to learn some Python today?`)
}

else {
    alert("please you have to fill this ");
}