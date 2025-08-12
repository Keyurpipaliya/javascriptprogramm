//  Accept a value and find all factors.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is find all factors: "));

console.log(`Factors of ${num} are: `);
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}


