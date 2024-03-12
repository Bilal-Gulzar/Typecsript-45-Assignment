//Exercise NO : 44 Sandwiches

//""Make a sandwich with the given items.""
function sandwich(items:string[]): void{

    console.log("\nI'll make you a great sandwich:");
    for(let i=0; i<items.length; i++){
console.log("  .....Adding " + items[i] + " to your sandwich.")
    }
    console.log("Your sandwich is ready!");
}

// invoke function
sandwich(["roast beef", "cheddar cheese", "lettuce", "honey dijon"])
sandwich(["turkey", "apple slices", "honey mustard"])
sandwich(["peanut butter", "strawberry jam"]);