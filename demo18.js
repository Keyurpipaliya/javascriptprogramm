// . Accept 10 values and count total positive, negative and zero values.

let prompt = require('prompt-sync')();

let positive = 0;
let negative = 0;

for (let i = 0; i <= 10; i++) {
    let num = parseInt(prompt(`Enter is positive and Negative Numbers: `));
    if (num > 0) {
        console.log("Entered is Positive Number");
    } else if (num < 0) {
        console.log("Entered is Negative Number");
    } else {
        console.log("Entered value is Zero");
    }
}

