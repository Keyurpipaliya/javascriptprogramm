// Find square root of a number.

let prompt = require('prompt-sync') ();

let square = parseInt(prompt("Enter is square root of number :"));
let num1 = 25;

let result = Math.sqrt(square);

console.log(`The Square root of ${num1} is ${result}`);

