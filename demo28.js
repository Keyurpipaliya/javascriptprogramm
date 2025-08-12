// Accept a value and find whether it is prime or not

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is Number check it if prime or not: "));

let isPrime = true;

if (isPrime) {
	console.log(` ${num} You can now add the number is prime.`);
} else {
    console.log(` ${num} Enter is not prime number : `);
}