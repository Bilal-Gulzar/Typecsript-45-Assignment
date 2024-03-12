 let personName :string = ''
personName = prompt('what is your name?') || '';


 let  upperCase :string = personName.toUpperCase();
 let lowerCase :string = personName.toLowerCase();
 let tittleCase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(' ');




 if(personName !== '' && personName !== null){alert(`hello ${personName},here are your name in:
 LowerCase:${lowerCase} 
 UpperCase:${upperCase}
 tittleCase:${tittleCase}`);

 }
 else{
    alert(
        "you must fill your name" );
 }