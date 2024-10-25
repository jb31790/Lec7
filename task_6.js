#!/usr/bin/env node

let bool1 = 1;
let bool2 = 1;

function nand(sig1, sig2) {
  return !(sig1 && sig2);
}

function nor(sig1, sig2) {
  return !(sig1 || sig2);
}

function xor(sig1, sig2) {
  let a = sig1 || sig2;
  let b = nand(sig1, sig2);
  return a && b;
}

console.log(Number(xor(bool1, bool2)));
