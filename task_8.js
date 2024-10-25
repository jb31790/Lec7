#!/usr/bin/env node

let total = 0;
console.log(total);

total += 4;
console.log(total);

total *= 2;
console.log(total);

total -= 8;
console.log(total);

function sqrt(n) {
  let result;
  try {
    result = n / n;
  } catch (error) {
    console.log("You can't divide by zero!!");
  }
  return result;
}

console.log(sqrt(total));

// I'm giving up, this tasks definition is weird... If x /= 0 won't throw an error I don't even know how a try...catch will do any good when working with Assignment Operators...
