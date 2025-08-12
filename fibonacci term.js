// Write C program to generate nth fibonacci term using function.

let prompt = require('prompt-sync') ();

function fibonacci(n) {
    if (n < 0) {
        return -1;
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let a = 0;
        let b = 1;
        for (let i = 0; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

const n = 5;
const nthFibonacciTerm = fibonacci(n);
console.log(`The ${n} Fibonacci term is: ${nthFibonacciTerm}`);