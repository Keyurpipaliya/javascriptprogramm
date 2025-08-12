// Accept a value and find whether it is perfect no or not.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt(`Enter is perfect number or not perfect number: `));

let sum = 0;
for(let i = 1; i < num; i++) {
    if (num % i == 0) {
        sum += i;
    }
}

if (sum == num) {
    console.log(`Enter is ${num} is perfect number: `);
} else {
    console.log(`Enter is ${num} is not perfect number: `);
}

