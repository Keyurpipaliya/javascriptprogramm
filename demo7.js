// Accept 10 values and count positive numbers.

let prompt = require('prompt-sync') ();

let positiveCount = 0;

for (let i = 1; i <= 10; i++) {
    let value = parseFloat(prompt(`Enter value ${i}: `));
    if (value > 0) {
        console.log(`Value ${i} is positive: ${value}`);
    }
}