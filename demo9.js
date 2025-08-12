// . Accept a value and print math table of it.

let prompt = require('prompt-sync')();

let value = parseInt(prompt("Enter a number to print its multiplication table: "));

console.log(`Multiplication table of ${value}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${value} * ${i} = ${value * i}`);
    console.log(`${value} + ${i} = ${value + i}`);
    console.log("-----");
}