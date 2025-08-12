// Write a program to print sum of odd and even numbers from 1 to 20.

let prompt = require('prompt-sync') ();

let sumOdd = 0;
let sumEven = 0;

for (let i = 1; i <= 20; i++) {
    if ( i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}