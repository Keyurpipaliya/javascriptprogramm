// Accept 10 values and print positive numbers.

let prompt = require('prompt-sync')();  

let positiveNumber = [];

for (let i = 1; i <= 10; i++) {
    let value = parseFloat(prompt(`Enter value ${i}: `));
    if (value > 0) {
        positiveNumber.push(value);
        console.log(`Positive number ${i}: ${value}`);    
    } else {
        console.log(`Value ${i} is not positive: ${value}`);
    }
}