// .Write a Program to convert binary number to decimal.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt('Enter is binary number into decimal number: '));
let decimal = 0;
let n = binary.length;

for (let i = 0; i<n; i++) {

    const number = parseInt(binary[n - i - 1]);

    decimal += digit * Math.pow(2, i);
}

let result = num.toString(5);

console.log('Binary number into decimal' + '  ' +result);


