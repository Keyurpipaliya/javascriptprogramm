// Write C program to find factorial of a number using function.

function factorial(n) {
    if (n < 0) {
        return "Enter is Factorial Number and is not defined";
    }
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

let number = 5;
let factResult = factorial(number);
console.log(`Factorial of ${number} is ${factResult}`);

number = 0;
factResult = factorial(number);
console.log(`Factorial of ${number} is ${factResult}`);

number =- 3;
factResult = factorial(number);
console.log(`Factorial of ${number} is ${factResult}`);

