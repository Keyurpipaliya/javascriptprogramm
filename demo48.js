// 54321
// 4321
// 321
// 21
// 1

const prompt = require('prompt-sync') ();

let rows = parseInt(prompt("Enter is 5 Patterns of characters : "));
let n = 5;

for (let i = 0; i < 5; i--) {
    let rows = " ";
    for (let j = 1; j < 5 - n; j--) {
    rows += "* "; 
    }
    console.log(rows);
}