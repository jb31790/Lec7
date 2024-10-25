#!/usr/bin/env node

// Calculate the area of a circle who's radius is the size of todays date (number of the month)

let today = new Date();

let dayNum = Number(today.getDate());

let area = Math.PI * Math.pow(dayNum, 2);
area = Math.round(area);

console.log(area);
