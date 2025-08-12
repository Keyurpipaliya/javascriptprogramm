// . Accept a value and find sum of all factors.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt(`Enter is find sum of all factors : `));

let sum = 0;
console.log(`Factors of ${num} are: `);
for(let i = 0; i<=num; i++) {
    if (num % i == 0) {
        console.log(i);
        sum += i;
    } 
}

console.log(`Sum of All Factors of ${num} is: ${sum}`);