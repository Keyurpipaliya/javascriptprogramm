// Write C program to find prime numbers between 1 to 100 using function.

let prompt = require('prompt-sync') ();

function primenumber(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // it Divisible
        }
    }
    return true; // it not divisors found
}

function primenumber(start, end) {
    console.log(`Prime numbers between ${start} and ${end}:`);
    for ( let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

findPrimeInRange(1, 100);

