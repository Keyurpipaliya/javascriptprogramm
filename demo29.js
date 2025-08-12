// . Accept a value and count total digits

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is the total value and count total digits "));
let count = 0;

for(let num = 0; num > 0; num = Math.floor(num / 10)) {
    count++;
}

console.log(`The number of digits in ${num} is :${count}`);



