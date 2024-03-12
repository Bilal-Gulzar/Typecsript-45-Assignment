
//Exercise NO: 43 Unchanged MAGICIANS

//make array to store magician names
const magiciansNames: string[] = ["Criss Angel", "David Copperfield", "David Blaine","Penn & Teller",
  "Helder Guimarae"];

// make function which prints the name of each magician in the array.
function show_magicians(val: string[]): void {

  //"""Print the name of each magician in the list."""
  for (let i = 0; i < val.length; i++) {
    console.log("\n" + val[i] + "\n");
  }
}

// invoke function
show_magicians(magiciansNames)

console.log("\n----------//////////////--------------------------\n")




//make copy of magiciansNames array
let copyArry: string[] =[...magiciansNames]


// make funtion that modifies the array of magiciansNames:
function make_great(val1: string[]): string[] {

  // Build a new list to hold the great musicians
  let magicians: string[] = [];

  //"""Add 'the Great!' to each magician's name."""
  for (let j = 0; j < val1.length; j++) {
    magicians.push(val1[j] + " the Great. ");
  }
  return magicians;
}


//invoke function
console.log("\nGreat magicians:");
 const greatmagicians :string[] = make_great(copyArry)
show_magicians(greatmagicians)

console.log("\nOriginal magicians:");
show_magicians(magiciansNames)
