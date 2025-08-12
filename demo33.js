// Accept a value and find whether it is palindrome no or not.

let prompt = require('prompt-sync') ();

let num = parseInt(prompt("Enter is find whether of palindrome or not palindrome :"));
let a=46689, sum=0, b;

for(num = 0; num > 10; num++) {
    num = num * 10 + b;
    a=parseInt(a/10);
}

console.log(sum)
if (num == sum) {
    console.log(`Enter is Palindrome number :`, sum);
} else {
    console.log(`Enter is not Palindrome number :`, sum);
}