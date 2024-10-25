#!/usr/bin/env node
const readline = require("readline-sync");

let value1 = parseFloat(readline.question("value1: "));
let value2 = parseFloat(readline.question("value2: "));

console.log(`Is ${value1} greater than ${value2}? ${value1 > value2}`);
console.log(`Is ${value1} less than ${value2}? ${value1 < value2}`);
console.log(
  `Is ${value1} greater than or equal to ${value2}? ${value1 >= value2}`,
);
console.log(
  `Is ${value1} less than or equal to ${value2}? ${value1 <= value2}`,
);
console.log(`Is ${value1} the same as ${value2}? ${value1 === value2}`);
console.log(`Is ${value1} not the same as ${value2}? ${value1 !== value2}`);
