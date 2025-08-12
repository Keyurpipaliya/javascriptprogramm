// Accept a value and find power of a number using for loop.

let prompt = require('prompt-sync') ();

let power = 100;

power = parseInt(prompt(`Enter is Power of numbers: `));

let base = parseInt(prompt(`Enter is base: `));
let exponent = parseInt(prompt(`Enter is exponent: `));

let result = 1;
for(let i = 0; i <= exponent; i++) {
    result *= base;
}

console.log(`${base} raised to the power ${exponent} is: ${result}`);
