// Exercise No : 21 Typescript Object

// object about person 
const personInfo: personInfo = { 
   name : "Taha sufyan",
   age : 19 ,
   nationality : "pakistani", 
   hobby : "cricket",
   student : true
}

interface personInfo{
    name : string,
    age : number, 
    nationality :string,
    hobby :string,
    student : boolean 
}
console.log(personInfo);

// object about  contry 
 
const countryinfo: countryinfo = {
    country_name : "Pakistan",
    provinces : 4,
    provinces_names : "sindh , Balochistan , khyber pakhtunkhwa , punjab",
    largest_city : "Karachi",
    founderName_of_pakistan : "Quaid e Azam muhammad ali jinnah",

}
//Object about country

interface countryinfo{
    country_name :string,
    provinces : number,
    provinces_names : string,
    largest_city : string,
    founderName_of_pakistan : string
}
console.log(countryinfo);