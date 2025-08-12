// Write C program to print all strong numbers between 1 to 100 using function.

let prompt = require('prompt-sync') ();

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

function strongnumber(num) {
    let originalNum = num;
    let sumOfFactorial = 0;
    let tmpNum = num;

    while (tmpNum > 0) {
        let digit = tmpNum % 10;
        sumOfFactorial += factorial(digit);
        tmpNum = Math.floor(tmpNum / 10);
    }

    return sumOfFactorial === originalNum;
}

console.log(strongnumber(145));
console.log(isArmstrongNumber(123));

