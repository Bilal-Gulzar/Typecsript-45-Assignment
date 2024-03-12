// Exercise No : 24 More conditional test

// Equality Test 
console.log("Equality test with string : ", "pineapple" === "pineapple");

//Inequality Test :
console.log("Inequality test with string : ", "pineapple" !== "pineapple");

// Test using lower case function
console.log("Test using lower case function : ", "muhammad bilal" == "MUHAMMAD BILAL".toLowerCase());

// Making false result 
console.log("Test using lower case function : ", "muhammad bilal".toUpperCase() == "MUHAMMAD BILAL".toLowerCase());

// Numerical test involving equallity 
console.log("Equality test with nummber : ", 50 === 100/2 );

// Numerical test involving inequality 
console.log("Equality test with nummber : ", 50 != 100/2 );

// Numerical test involving grater than 
console.log("grater than test :", 1000 > 500 );

//Numerical test involving less than 
console.log("less than test :", 10 < 50 );

// numerical test involving grater than or equal to 
console.log("grater than and equal to test  :", 25 >= 20);

// numerical test involving less than or equal to 
console.log("less than and equal to test  :",  8 <= 8 );

//Test using && operator 
console.log("&& operator  test : ", 2*4 === 8 && 16/2 >= 8);

//test using || operator
console.log("|| operator test : ", 10 > 15 || 30 < 29);

//test whether an item is in a array or not 
const finding: string[] =[" esra bilgic", "becky", "Naomi", "charlotte"];
console.log(" Finn Balor is in array ",!(finding.indexOf("finn Balor)")));

//test whether an item is in a array or not     "EXTRA PRACTICE"
const fruits: string[] = ["Mango", "strawberry", "pineApple", "Banana"];
console.log(" Banana is in array ",!!(finding.indexOf("Banana")));

//test whether an item is in a array or not       "EXTRA PRACTICE"
const geometryBox: string [] =["pen", "pencil","scale", "eraser"];
console.log(" cutter is in array ",!(finding.indexOf("cutter")));

//test whether an item is in a array or not      "EXTRA PRACTICE"
const nato: string [] =["USA", "UK", "france", "turkey"];
console.log(" China is in array ",!(finding.indexOf("china")));

//test whether an item is in a array or not     "EXTRA PRACTICE"
 const car: string[] = ["Hondah", "Toyota", "hyundai", "range rover"];
 console.log(" hyundai is in array ",!!(finding.indexOf("hyundai")));