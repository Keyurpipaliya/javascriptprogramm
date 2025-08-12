// 123454321
//  2345432
//  34543
//   454
//    5

let prompt = require('prompt-sync') (); 

let num = parseInt(prompt("Enter is 5 charcaters of Patterns : "));
let rows = 5; 
let pattern = "";

for (let n = 1; n <= rows; n++) {
    for (let space = 1; space <= 5 - n + 1; space++) {
        pattern += num;
    }
    for (let k = 1; k <= rows + n - 1; k++) {
        pattern += k;
    }
    for (let num = 0; num <= rows - 2; num++) {
        pattern += num; 
    }
    pattern += "\n";

    console.log(pattern);
}
