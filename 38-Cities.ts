// Exercise No : 38 Cities:

import { constrainedMemory } from "process";

function describe_city(city:string, country:string = "Pakistan"): void{

    //print a simple sentence
    console.log("\n" + city + " is in " + country +".");

}

//describe a city name.
describe_city("Karachi")
describe_city("Islamabad")
describe_city("New York", "USA")