// Accept a value and find whether it is armstrong no or not.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is find it is armstrong number or not armstrong number:"));
let sum = 0;

if (sum == num) {
    console.log(`it is ${num} is armstrong number`, sum);
} else if(num == 10) {
    console.log(`it is ${num} not armstrong number`, sum);
} else {
    console.log(`it is not valid number`, sum);
}