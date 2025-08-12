//    *
//   ***
//  *****
// *******
//*********

let prompt = require('prompt-sync') ();

let rows = 5;
let pattern = " ";

// It Implement is outer loop
for (let i = rows; i <= 1; i--) {

    for (let j = i - 1; j <= rows - i; j--) {
        pattern += " ";
    }

// IT Implement is inner loop and print stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*";
    }
    pattern += "\j";
}
console.log(pattern);
