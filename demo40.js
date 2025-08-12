//  . Accept values until user wants and print sum of all

let prompt = require('prompt-sync') ();

let sum = 0;
let input;

while (true) {
    input = parseInt(prompt("Enter is print sum of all numbers: "));

    if(input === null || input === 'done') {
        break;
    }
}

let number = parseFloat(input);

if (isNaN(number)) {
    alert("Enter is Invalid Input, Please Enter a valid number: ");
} else {
    sum += number;
}

console.log(`The sum of all Enterd number is : ${sum}`);

