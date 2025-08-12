// Print Fibonacci series up to 10 steps.

let prompt = require('prompt-sync') ();

// Take input from user.
let number = parseInt(prompt("Enter is Fibonacci Series :"));

let n1 = 0, n2 = 1, nextTerm;

console.log('Enter is Fibonacci Series: ');

for(let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}