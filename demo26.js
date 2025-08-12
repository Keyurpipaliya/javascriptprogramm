// Accept a value and find highest factor.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is find highest number: "));

let highestFactor = 1;
for (let i = 0; i < num; i++) {
    if(num % i === 0) {
        highestFactor = i;
    }
}

console.log(`The highest factor of ${num} is: ${highestFactor}`);