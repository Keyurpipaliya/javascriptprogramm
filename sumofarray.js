// Write C program to find sum of array elements using function.

let prompt = require('prompt-sync') ();

function sumofarray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [10, 20, 30, 40, 50];

const totalSum = calculateSum(numbers);

console.log("Sum of array of elements :", totalSum);
