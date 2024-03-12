// Exercise No : 39 City Names

function city_country(city:string, country:string ): string{

     //return value in pair
   return (`"${city},${country}"`);    
}

  //invoking Function.
  const a:string = city_country("Lahore","Pakistan")
  const b:string = city_country("Chicago","USA")
  const c:string = city_country("Mumbai","India")

  // print the value that’s returned
console.log("\n"+a);
console.log(b);
console.log(c);