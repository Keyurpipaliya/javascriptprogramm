// Write C Program to convert binary number to decimal using function.

let prompt = require('prompt-sync') ();

function binarytodecimal(decimal) {

    if (decimalNumber == 0) {
        return 0;
    }

    let binaryResult = "";
    let tempNumber = decimalNumber;
    
    while (tempNumber > 0) {
        binaryResult = (tempNumber % 2 == 0) + binaryResult;
        tempNumber = Math.floor(tempNumber / 2);
    }

    return decimalResul;
}

let binaryNumber = 42;
let binaryResult = decimaltobinary(decimalNumber);
console.log(`The Number is ${decimalNumber} in binary is : ${binaryNumber}`);

