// Write C program to find sum of natural numbers using function.

function naturalNumber(n) {
    if (n < 1) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const number = 10;
const result = naturalNumber(number);
console.log(`The sum of the first  ${number} is natural number is :${result}`);

const anothernumber = 6;
const anotherResult = naturalNumber(anothernumber);
console.log(`The sum of the first ${anothernumber} is natural is :${anotherResult}`);