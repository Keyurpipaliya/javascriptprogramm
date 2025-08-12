//  Write js program to check palindrome number using function.

let prompt = require('prompt-sync') ();

function palindromeNumber(number) {

    const numStr = number.toString();

    const reversedStr = numStr.split('').reverse().join('');

    return numStr == reversedStr;   
}

const num1 = 121;
console.log(`${num1} is first palindrome: ${palindromeNumber(num1)}`);

const num2 = 123;
console.log(`${num2} is second palindrome: ${palindromeNumber(num2)}`);

const num3 = 1331;
console.log(`${num3} is third palindrome: ${palindromeNumber(num3)}`);