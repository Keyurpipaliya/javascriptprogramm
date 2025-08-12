// Write C program to check even or odd using functions.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is check even or odd number"));

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number1 = 10;
let result1 = checkEvenOdd(number1);
console.log(`${number1} is ${result1}`);

let number2 = 7;
let result2 = checkEvenOdd(number2);
console.log(`${number2} is ${result2}`);    

let num3 = 0;
let result3 = checkEvenOdd(num3);
console.log(`${num3} is ${result3}`);

