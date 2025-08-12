// prime number with armstrong number.

function isArmstrongNumber() {
    let numString = String(num);
    let numDigits = numString.length;
    let sum = 0;

    for (let i  = 0; i < numDigits; i++) {
        let digits = parseInt(numString[i]);
        sum += Math.pow(digits, numDigits);

        return sum === num;
    }

    console.log(isArmstrongNumber(153));
    console.log(isArmstrongNumber(9475));
    console.log(isArmstrongNumber(123));
}