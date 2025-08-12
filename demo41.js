//  .Write a Program to convert decimal number to binary.

let prompt = require('prompt-sync') ();

let number = parseInt(prompt('Enter a decimal number: '));

let result = number.toString(2);

console.log('Decimal number to binary '+ ' ' + result);
