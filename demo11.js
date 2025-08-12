// Accept 10 values and print odd numbers.


let prompt = require('prompt-sync')();

let oddNumber = [];

for (let i = 1; i <= 10; i++) {
    let value = parseInt(prompt(`Enter value ${i}: `));
    if (value % 2 !== 0) {
        oddNumber.push(value);
    }
}