// . Accept 10 values and count negative numbers.

let prompt = require('prompt-sync') ();

let negativeCount = 0;

for (let i = 1; i <= 10; i++) {
    let value = parseFloat(prompt(`Enter value ${i}: `));
    if (value < 0) {
        negativeCount++;
        console.log(`Value ${i} is negative: ${value}`);
    } else {
            console.log(`Value ${i} is not negative: ${value}`);
            }
        }