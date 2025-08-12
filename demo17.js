//  Accept 10 values and print sum of odd and even numbers.

const prompt = require('prompt-sync') ();

let oddSum = 0;
let evenSum = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Enter is numbers ${i}: `));
    if (num % 2 === 0) {
        evenSum += num;
    } else {
        oddSum += num;
    }
}

console.log(`Sum of even numbers:  ${evenSum}`);
console.log(`Sum of odd numbers: ${oddSum}`);