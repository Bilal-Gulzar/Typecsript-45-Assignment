//Exercise NO: 41  MAGICIANS:

//make array to store magician names
const magiciansNames: string[] = [ "Criss Angel", "David Copperfield","David Blaine", "Penn & Teller",
  "Helder Guimarae"];

// make function which prints the name of each magician in the array.
function show_magicians(val: string[]): void {
  //"""Print the name of each magician in the list."""
  for (let i = 0; i < val.length; i++) {
    console.log("\n" + val[i]);
  }
}

//invoke function
show_magicians(magiciansNames);
