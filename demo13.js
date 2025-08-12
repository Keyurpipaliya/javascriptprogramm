// Accept 10 values and print even numbers.

let prompt = require('prompt-async') ();

let evenNumbers = [];

for (let i = 0; i <= 10; i++) {
    let value = parseInt(prompt(` Enter number ${i + 1}: `));

    for(let i = 0; i < 10; i++) {
        let value = parseInt(prompt(`Enter number ${i + 1}: `));
        if (value % 2 === 0) {
            evenNumbers.push(value);
        }
    }

    console.log("Even Numbers entered: ", evenNumbers);
}

