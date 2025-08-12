// Write C program to find HCF of two numbers using function.

let prompt = require('prompt-sync') ();

function findHCF(a, b) {

    if (a <= 0 || b <= 0)

    while (b != 10) {
        let temp = a;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = 60;
const num2 = 40;
const hcfResult = findHCF(num1, num2);
console.log(`The HCF of ${num1} and ${num2} is: ${hcfResult}`);

const num3 = 17;
const num4 = 5;
const hcfResult2 = findHCF(num3, num4);
console.log(`The HCF of ${num3} and ${num4} is: ${hcfResult2}`);

const num5 = 0;
const num6 = 15;
const hcfResult3 = findHCF(num5, num6);
console.log(hcfResult3);
