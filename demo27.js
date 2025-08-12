// .Write a program to find LCM of two numbers.

let prompt = require('prompt-sync') ();

let num1 = parseInt(prompt("Enter is first numbers :"));
let num2 = parseInt(prompt("Enter is second numbers : "));

let Max = Math.max(num1, num2);
let lcm = Max;

for(let i = 0; i<=Max; i++) {
    if(lcm % num1 === 0 && lcm % num2 === 0) {
        console.log(`LCM of ${num1} and ${num2} is: ${lcm}`);
    }
}

