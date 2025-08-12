//prime and armstrong number:

let prompt = require('prompt-sync') ();

let prime = parseInt(prompt("Enter prime and armstrong number : "));

function isPrime(num) {
    if(num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;

    console.log(isPrime(7));
    console.log(isPrime(10));
}
