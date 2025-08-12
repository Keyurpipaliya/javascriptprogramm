// Print all ASCII character with their values.

let prompt = require('prompt-sync') ();

const string = prompt("Enter is a ASCII character: ");

const result = string.charCodeAt(0);

for (let i = 0; i<=127; i++) {
    const character = String.fromCharCode(i);
    console.log(`ASCII Value: ${i}, character: '${character}`);
}

console.log(`The ASCII value is ${result}`);