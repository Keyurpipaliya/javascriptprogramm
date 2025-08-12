// . Accept 10 values and count even numbers.

let prompt = require('prompt-sync') ();

let evenCount = 0;

for (let i = 1; i<=10; i++) {
    let num = parseInt(prompt(`Enter number ${i}: `));
    if (num % 2 == 0){
        evenCount++;
    }
}

console.log(`Total Even number enterd: ${evenCount}`);