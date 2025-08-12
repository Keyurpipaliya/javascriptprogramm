

let prompt = require('prompt-sync')();  

let number1 = prompt("Enter is the first number: ");
let number2 = prompt("Enter is second number: ");

for (let i = 1; i <= 10; i++) {
    console.log(`${number1} * ${i} = ${number1 * i}`);
    console.log(`${number2} * ${i} = ${number2 * i}`);

    console.log("-----");

    console.log(`${number1} + ${i} = ${parseInt(number1) + i}`);
    console.log(`${number2} + ${i} = ${parseInt(number2) + i}`);
    console.log("-----");
}

