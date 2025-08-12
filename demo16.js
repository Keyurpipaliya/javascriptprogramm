//  Accept 10 values and count total odd and even numbers.


const prompt = require('prompt-sync') ();

let OddCount = 0;
let evenCount = 0;

for (let i = 1; i<=10; i++) {
    let num = parseInt(prompt(`Enter number ${i}: `));
    if (num % 2 === 0) {
        evenCount++;
    } else {
        OddCount++;
    }
}

console.log(`Total even numbers entered: ${evenCount}`);
console.log(`Total odd numbers enterd: ${OddCount}`);



