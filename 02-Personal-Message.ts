let person_name : string = prompt("what is your name ?") || ''

if (person_name !== '' && person_name !== null){
    alert(`Hello ${person_name}, would you like to learn some Python today?”`)
}

else {
    alert("please you have to fill this ");
}