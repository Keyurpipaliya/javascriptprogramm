//  Print all Perfect numbers between 1 to 1000.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is Perfect numbers 1 to 1000 : "));

for(let i = 0; i <= 1000; i++) {
    const number = num.charcodeAt();
    console.log(`${number} is perfect numbers: `);
}

if(num==perfect) {
    console.log(`Enter ${num}is Perfect Number:`)
} else {
    console.log(`Enter ${num} is not Perfect Number:`);
}



