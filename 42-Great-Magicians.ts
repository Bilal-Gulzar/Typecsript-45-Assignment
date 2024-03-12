//Exercise NO: 42 Great MAGICIANS

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


// make funtion that modifies the array of magiciansNames:
function make_great(val1: string[]): void {
  
  //print the array of magiciansNames after modifying :
  for (let j = 0; j < val1.length; j++) {
            val1[j] = val1[j] + " the Great. ";
  }
}

// invoke Function
make_great(magiciansNames)
show_magicians(magiciansNames)
