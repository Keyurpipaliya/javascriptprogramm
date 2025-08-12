// Accept 10 values and print negative numbers.

let prompt = require('prompt-sync') ();

let negativeNumbers = [];

for (let i = 1; i <= 10; i++) { 
    let value = parseFloat(prompt(`Enter value ${i}: `));
    if (value < 0) {
        negativeNumbers.push(value);
    }
}

console.log("Negative numbers are:" , negativeNumbers);
