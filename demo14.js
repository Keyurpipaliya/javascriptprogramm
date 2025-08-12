// Accept 10 values and count odd numbers.

let prompt = require('prompt-sync')();

let oddCount = 0;

for (let i = 1; i<=10; i++) {
    let numbers = parseInt(prompt(`Enter number ${i}: `));
    if (numbers % 2 != 0) {
        oddCount++;
    }
}
