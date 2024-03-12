// Exercise No : 18 seeing the world

let places: string[] =["Australia", "United kingdom", "Russia","America", "Dubabi"];

//Print  array in its original order.
console.log("array in its original order: " + places);

//Print  array in alphabetical order without modifying the actual list.
console.log("[copy array] array in alphabetical order: " + [...places].sort());

//Show that  array is still in its original order by printing it.
console.log( "[original array] array in its original order: " + places);

//Print array in reverse alphabetical order without changing the order of the original list.
console.log("[copy array] array in reverse alphabetical order: "  +[...places].sort().reverse());

//Show that array is still in its original order by printing it again.
console.log("[original array] array in its original order: " + places);

//Reverse the order list. Print the array to show that its order has changed.
console.log("[original array] Reverse the order list: " + places.reverse());

// Reverse the order list again. Print the list to show it’s back to its original order
console.log("[original array] Reverse the order list again to show it’s back to its original order: " + places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("[original array] sort array list  so it’s stored in alphabetical order: "  + places.sort());

//Sort to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("[original array] Sort to change array so it’s stored in reverse alphabetical order: " + places.sort().reverse());