// Write C program to find power of a number using function

let prompt = require("prompt-sync") ();

function calculatePower(base, number) {
    return Math.pow(base, number);
}

let baseNum = 5;
let number = 3;

//Write an Formula for power.
let Result = number(baseNum, number);
console.log(`${power} raised to the power of ${number} is :${Result}`);

let result = calculatePower(base, number);
console.log(`${baseNum} raised to the calculatePower ${baseNum} is:${Result}`);
