#!/usr/bin/env node

let myArray = ["Durian", "Kiwi", "Mango"];
console.log(myArray);

myArray.push("Lime");
console.log(myArray);

myArray.pop();
console.log(myArray);

let kiwi = myArray[1];
console.log(kiwi);

console.log(`Length of myArray: ${myArray.length}`);
