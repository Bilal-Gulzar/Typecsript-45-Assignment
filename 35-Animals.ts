// Exercise No : 35 Animal with same characteristic.

import { CONNREFUSED } from "dns";

let animals: string[] = ["spider monkey", "lemur", "giraffe"];

// print each animals.
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("\n")

// print a statment about each animal.
for(let J=0; J<animals.length; J++){
console.log(`A ${animals[J]} has a long tail.`);

}

console.log("\nAll of these animals have long tails.");