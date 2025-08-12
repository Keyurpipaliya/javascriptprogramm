// 54321
// 54321
// 54321
// 54321
// 54321

let prompt = require('prompt-sync') ();

let rows = parseInt(prompt("Enter is 5 Characters of Patterns : "));;

for (let i = 5; i >= 1; i--) {
    let rows = ' ';
    for (let j = i; j >= 1; j--) {
        rows += j;
    console.log(rows);
    }
}