// Write C program to find LCM of two numbers using function.

let prompt = require('prompt-sync') ();

function findGD(a, b) {

    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }

    // Calculate LCM using the GCD 
    return Math.abs(a * b) / findGD(a, b);
}

let num1 = 12;
let num2 = 18;
let lcmResult = findLCM(num1, num2);
console.log(`The LCM of ${num1} and ${num2} is : ${lcmResult}`);
