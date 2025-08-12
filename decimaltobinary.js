// Write C Program to convert decimal number to binary using function.

function decimaltobinary(decimalNumber) {

    if (decimalNumber === 0) {
        return "0";
    }

    let binaryResult = "";
    let tempNumber = decimalNumber; 

    while (tempNumber > 0) {
        binaryResult = (tempNumber % 2) + binaryResult;
        tempNumber = Math.floor(tempNumber / 2);
    }

    return binaryResult;

}

let decimalNumber = 42;
let binaryOutput = decimaltobinary(decimalNumber);
console.log(`The number ${decimalNumber} in binary  is : ${binaryOutput}`);


